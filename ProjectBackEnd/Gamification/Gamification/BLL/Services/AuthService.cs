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
using System.Reactive.Subjects;
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

        public async Task<string> Login(string userName, string password, CancellationToken cancellationToken)
        {
            User user = await AuthenticateUser(userName, password, cancellationToken);
            if (user == null)
            {
                return null;
            }

            var token = GenerateJWT(user);
            var response = new
            {
                access_token = token,
                username = user.UserName
            };

            return response.ToString();
        }

        public async Task<User> AuthenticateUser(string userName, string password, CancellationToken cancellationToken)
        {
            return await UnitOfWork.userRepository.AuthenticateUser(userName, password, cancellationToken);
        }

        private string GenerateJWT(User user)
        {
            var securityKey = AuthOptions.GetSymmetricSecurityKey();
            var credentialist = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserName.ToString())
            };

            if (user.Roles != null)
            {
                foreach (var role in user.Roles)
                {
                    claims.Add(new Claim(ClaimTypes.Role, role.RoleName));
                }
            }

            var token = new JwtSecurityToken(
                claims: claims, 
                expires: DateTime.Now.AddDays(AuthOptions.TokenLifeTime),
                signingCredentials: credentialist);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
