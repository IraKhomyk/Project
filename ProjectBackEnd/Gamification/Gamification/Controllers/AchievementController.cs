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

namespace Gamification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private IAchievementService _achievementService { get; set; }
        public AchievementController(IAchievementService achievementService)
        {
            _achievementService = achievementService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAchievements(CancellationToken cancellationToken)
        {
            return Ok(await _achievementService.GetAllAchievements(cancellationToken));
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetAchievementById(Guid achievementId, CancellationToken cancellationToken)
        {
            return Ok(await _achievementService.GetAchievementById(achievementId, cancellationToken));
        }

        [HttpPost]
        public async Task<IActionResult> CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            await _achievementService.CreateAchievement(newAchievement, cancellationToken);
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAchievement(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            await _achievementService.UpdateAchievement(achievementId, newAchievement, cancellationToken);
            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken)
        {
            await _achievementService.DeleteAchievement(achievemenId, cancellationToken);
            return NoContent();
        }
    }
}
