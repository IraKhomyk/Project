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

namespace Gamification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        //string path = @"./../Gamification/MockData/mock_data.json";
        private MyContext mycontext;
        private ILogger<AchievementController> _logger;
       // List<Achievement> CreatedList;
        public AchievementController(ILogger<AchievementController> logger, MyContext context)
        {
            _logger = logger;

            mycontext = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Achievement>> GetAll(CancellationToken cancellationToken)
        {
            using (mycontext)
            {
                return await mycontext.Achievements.ToListAsync();
            }
        }

        [HttpGet("{Id}")]
        public async Task<ActionResult<Achievement>> GetAchievementById(int Id, CancellationToken cancellationToken)
        {
            using (mycontext)
            {
                return Ok(await mycontext.Achievements.FirstAsync(c => c.Id == Id));
            }

        }
    }
}
