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
        private IUserService _userService { get; set; }
        public UserController(IUserService userService, IMapper mapper)
        {
            _userService = userService;
        }
      
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
