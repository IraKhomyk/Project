using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
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
    [Route("api/profile")]
    [ApiController]
    [Authorize]
    public class ProfileController : ControllerBase
    {
        private IAchievementService _achievementService { get; set; }
        private IUserService _userService { get; set; }

        public ProfileController(IAchievementService achievementService, IUserService userService)
        {
            _achievementService = achievementService;
            _userService = userService;
        }

        [HttpGet]
        [Route("current")]
        public async Task<ActionResult<UserDTO>> GetCurrentUserAsync(CancellationToken cancellationToken)
        {
            try
            {
                UserDTO currentUser = await _userService.GetCurrentUserAsync(cancellationToken);
                return Ok(currentUser);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet]
        [Route("achievements")]
        public async Task<ActionResult<UserDTO>> GetAllUserAchievementsAsync(CancellationToken cancellationToken)
        {
            try
            {
                UserAchievementsDTO achievements = await _achievementService.GetAllUserAchievementsAsync(cancellationToken);
                return Ok(achievements);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
