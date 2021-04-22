using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("api/profile")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        private IAchievementService _achievementService { get; set; }
        private IUserService _userService { get; set; }

        private readonly IHttpContextAccessor _httpContextAccessor;

        public ProfileController(IAchievementService achievementService, IUserService userService, IHttpContextAccessor httpContextAccessor)
        {
            _achievementService = achievementService;
            _userService = userService;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        [Route("current")]
        public async Task<ActionResult<UserDTO>> GetCurrentUserAsync(CancellationToken cancellationToken)
        {
            try
            {
                Guid userId = Guid.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

                UserDTO currentUser = await _userService.GetCurrentUserAsync(userId, cancellationToken);
                return Ok(currentUser);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet]
        [Route("achievements")]
        public async Task<ActionResult<AchievementDTO>> GetAllUserAchievementsAsync(CancellationToken cancellationToken)
        {
            try
            {
                Guid userId = Guid.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));

                var achievements = await _achievementService.GetAllUserAchievementsAsync(userId, cancellationToken);

                if(achievements == null)
                {
                    return NoContent();
                }

                return Ok(achievements);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
