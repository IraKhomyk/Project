using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
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
        private IUserService _userService { get; set; }
        private IOptions<AuthOptions> _authOptions;
        public UserController(IUserService userService, IMapper mapper, IOptions<AuthOptions> authOptions)
        {
            _userService = userService;
            _mapper = mapper;
            _authOptions = authOptions;
        }
        /*
                [Route("/login")]
                [HttpPost]
                public IActionResult Login(string password, string email)
                {
                    var user = AuthenticateUser(email, password);
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
                }*/

        [HttpGet]
        public async Task<IActionResult> GetAllUsers(CancellationToken cancellationToken)
        {
            return Ok(await _userService.GetAllUsers(cancellationToken));
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetUserById(Guid Id, CancellationToken cancellationToken)
        {
            return Ok(await _userService.GetUserById(Id, cancellationToken));
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            await _userService.CreateUser(newUser, cancellationToken);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            await _userService.UpdateUser(userId, newUser, cancellationToken);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            await _userService.DeleteUser(userId, cancellationToken);
            return NoContent();
        }
    }
}
