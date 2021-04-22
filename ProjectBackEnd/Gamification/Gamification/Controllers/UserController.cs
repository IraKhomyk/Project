using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using Microsoft.AspNetCore.Authorization;
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
    [Route("api/user")]
    [ApiController]
    [Authorize]

    public class UserController : ControllerBase
    {
        private IUserService _userService { get; set; }
        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
        }
      
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetAllUsersAsync(CancellationToken cancellationToken)
        {
            try
            {
                var users = await _userService.GetAllUsersAsync(cancellationToken);
                return Ok(users);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<UserDTO>> GetUserByIdAsync(Guid Id, CancellationToken cancellationToken)
        {
            try
            {
                UserDTO user = await _userService.GetUserByIdAsync(Id, cancellationToken);
                return Ok(user);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]

        public async Task<ActionResult<CreateUserDTO>> CreateUserAsync(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            try
            {
                User user = await _userService.CreateUserAsync(newUser, cancellationToken);
                return Ok(user);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPut]
        public async Task<ActionResult<UpdateUserDTO>> UpdateUserAsync(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            try
            {
                User user = await _userService.UpdateUserAsync(userId, newUser, cancellationToken);
                return Ok(user);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpDelete]
        public async Task<ActionResult<UserDTO>> DeleteUserAsync(Guid userId, CancellationToken cancellationToken)
        {
            try
            {
                await _userService.DeleteUserAsync(userId, cancellationToken);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
            
        }
    }
}
