using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using Microsoft.AspNetCore.Http;
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
        public IUnitOfWork _unitOfWork { get; set; }

        private IOptions<AuthOptions> _authOptions;

        public IUserService _userService { get; set; }

        private readonly IHttpContextAccessor _httpContextAccessor;
        public AuthService(IUnitOfWork unitOfWork, IMapper mapper, IOptions<AuthOptions> authOptions, IUserService userService, IHttpContextAccessor httpContextAccessor)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
            _authOptions = authOptions;
            _userService = userService;
            _httpContextAccessor = httpContextAccessor;
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
            return await _unitOfWork.userRepository.AuthenticateUser(userName, password, cancellationToken);
        }

        private string GenerateJWT(User user)
        {
            var securityKey = AuthOptions.GetSymmetricSecurityKey();
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

            var token = new JwtSecurityToken(AuthOptions.Issuer,
                AuthOptions.Audience,
                claims,
                expires: DateTime.Now.AddHours(AuthOptions.TokenLifeTime),
                signingCredentials: credentialist);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
