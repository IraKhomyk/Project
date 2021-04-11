using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private IUnitOfWork _unitOfWork { get; set; }
        private IOptions<AuthOptions> _authOptions;
        public UserController(IUnitOfWork unitOfWork, IMapper mapper, IOptions<AuthOptions> authOptions)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _authOptions = authOptions;
        }

        [Route("/login")]
        [HttpPost]
        public IActionResult Login([FromBody] Login request)
        {
            var user = AuthenticateUser(request.Email, request.Password);
            if (user != null)
            {
                var token = GenerateJWT(user);

                return Ok(new
                {
                    access_token = token
                });
            }
            return Unauthorized();
        }

        private User AuthenticateUser(string email, string password)
        {
            var user = _unitOfWork.userRepository.AuthenticateUser(email, password);
            return user;
        }

        private string GenerateJWT(User user)
        {
            var authParams = _authOptions.Value;

            var securityKey = authParams.GetSymmetricSecurityKey();
            var credentialist = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new List<Claim>()
            {
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString())
            };

            if(user.UserRoles != null)
            {
                foreach (var role in user.UserRoles)
                {
                    claims.Add(new Claim("role", role.ToString()));
                }
            }
            var token = new JwtSecurityToken(authParams.Issuer,
                authParams.Audience,
                claims,
                expires: DateTime.Now.AddSeconds(authParams.TokenLifeTime),
                signingCredentials: credentialist);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers(CancellationToken cancellationToken)
        {
            var users = await _unitOfWork.userRepository.GetAllUsers(cancellationToken);
            var mapData = _mapper.Map<IEnumerable<UserDTO>>(users);
            return Ok(mapData);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetUserById(Guid Id, CancellationToken cancellationToken)
        {
            var user = await _unitOfWork.userRepository.GetUserById(Id, cancellationToken);
            var mapData = _mapper.Map<UserDTO>(user);
            return Ok(mapData);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<User>(newUser);
            var user = _unitOfWork.userRepository.CreateUser(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(user);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<User>(newUser);
            var user = _unitOfWork.userRepository.UpdateUser(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(user);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            var deletedUser = _unitOfWork.userRepository.DeleteUser(userId, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(deletedUser);
        }
    }
}
