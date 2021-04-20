using Gamification.BLL.Services.Interfaces;
using Gamification.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService { get; set; }

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] Login login, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }

            var newToken = await _authService.Login(login.UserName, login.Password, cancellationToken);

            if (newToken == null)
            {
                return Unauthorized();
            }

            return Ok(newToken);
        }
    }
}
