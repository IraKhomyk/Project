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

namespace Gamification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private readonly IAchievementRepository _achievementRepository;

        public AchievementController(IAchievementRepository achievementRepository)
        {
            _achievementRepository = achievementRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements =  _achievementRepository.GetAllAchievements(cancellationToken);
            return Ok(await achievements);
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Achievement>> GetAchievementById(int Id, CancellationToken cancellationToken)
        {
            var achievement = _achievementRepository.GetAchievementById(Id, cancellationToken);
            return Ok(await achievement);
        }
    }
}
