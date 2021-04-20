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
    [Route("api/[controller]")]
    [ApiController]
    
    public class UserController : ControllerBase
    {
        private IUserService _userService { get; set; }
        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
        }
      
        [HttpGet]
        [Authorize]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetAllUsers(CancellationToken cancellationToken)
        {
            try
            {
                var users = await _userService.GetAllUsers(cancellationToken);
                return Ok(users);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<UserDTO>> GetUserById(Guid Id, CancellationToken cancellationToken)
        {
            try
            {
                var user = await _userService.GetUserById(Id, cancellationToken);
                return Ok(user);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public async Task<ActionResult<CreateUserDTO>> CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            try
            {
                await _userService.CreateUser(newUser, cancellationToken);
                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPut]
        public async Task<ActionResult<UpdateUserDTO>> UpdateUser(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            try
            {
                await _userService.UpdateUser(userId, newUser, cancellationToken);
                return Ok();
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpDelete]
        public async Task<ActionResult<UserDTO>> DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            try
            {
                var deletedUser = await _userService.DeleteUser(userId, cancellationToken);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
            
        }
    }
}
