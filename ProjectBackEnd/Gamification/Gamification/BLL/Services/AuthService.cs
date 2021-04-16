using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly IMapper _mapper;
        public IUnitOfWork UnitOfWork { get; set; }

        private IOptions<AuthOptions> _authOptions;

        public AuthService(IUnitOfWork unitOfWork, IMapper mapper, IOptions<AuthOptions> authOptions)
        {
            this.UnitOfWork = unitOfWork;
            this._mapper = mapper;
            _authOptions = authOptions;
        }

        public async Task<string> Login(string email, string password, CancellationToken cancellationToken)
        {
            User user = await AuthenticateUser(email, password, cancellationToken);
            if (user == null)
            {
                return null;
            }

            var token = GenerateJWT(user);

            return token;
        }

        public async Task<User> AuthenticateUser(string email, string password, CancellationToken cancellationToken)
        {
            return await UnitOfWork.userRepository.AuthenticateUser(email, password, cancellationToken);
        }

        private string GenerateJWT(User user)
        {
            var authParams = _authOptions.Value;

            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentialist = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString())
            };

            if (user.Roles != null)
            {
                foreach (var role in user.Roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role.RoleName));
                }
            }

            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentialist);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
