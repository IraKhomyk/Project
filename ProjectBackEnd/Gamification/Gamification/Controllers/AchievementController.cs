using Gamification.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Threading;
using Microsoft.EntityFrameworkCore;
using Gamification.DAL.IRepository;
using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.BLL.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;

namespace Gamification.Controllers
{
    [Route("api/achievement")]
    [ApiController]
    [Authorize]
    public class AchievementController : ControllerBase
    {
        private IAchievementService _achievementService { get; set; }
        public AchievementController(IAchievementService achievementService)
        {
            _achievementService = achievementService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<AchievementDTO>>> GetAllAchievementsAsync(CancellationToken cancellationToken)
        {
            try
            {
                var achievements = await _achievementService.GetAllAchievementsAsync(cancellationToken);
                return Ok(achievements);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<AchievementDTO>> GetAchievementByIdAsync(Guid achievementId, CancellationToken cancellationToken)
        {
            try
            {
                var achievement = await _achievementService.GetAchievementByIdAsync(achievementId, cancellationToken);
                return Ok(achievement);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateAchievementAsync(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            try
            {
                var achievement = await _achievementService.CreateAchievementAsync(newAchievement, cancellationToken);
                return Ok(achievement);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAchievementAsync(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            try
            {
                var achievement = await _achievementService.UpdateAchievementAsync(achievementId, newAchievement, cancellationToken);
                return Ok(achievement);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAchievementAsync(Guid achievemenId, CancellationToken cancellationToken)
        {
            try
            {
                var deletedAchievement = await _achievementService.DeleteAchievementAsync(achievemenId, cancellationToken);
                return NoContent();
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}
