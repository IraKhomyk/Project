using Gamification.BLL.DTO;
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
    [Route("api/authenticate")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService { get; set; }

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpPost]
        public async Task<ActionResult<AuthenticationUserDTO>> AuthenticateAsync([FromBody] Login login, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }

            var userNewToken = await _authService.AuthenticateAsync(login.UserName, login.Password, cancellationToken);

            if (userNewToken == null)
            {
                return Unauthorized();
            }

            return Ok(userNewToken);
        }

        [HttpPost]
        [Route("refresh")]
        public async Task<ActionResult<AuthenticationUserDTO>> RefreshTokenAsync(Guid refreshToken, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                return UnprocessableEntity(ModelState);
            }

            var userRefreshToken = await _authService.RefreshTokenAsync(refreshToken, cancellationToken);

            if (userRefreshToken == null)
            {
                return Unauthorized();
            }

            return Ok(userRefreshToken);
        }
    }
}
