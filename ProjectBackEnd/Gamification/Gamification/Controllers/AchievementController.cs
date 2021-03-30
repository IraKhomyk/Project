using Gamification.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        string path = @"./../Gamification/MockData/mock_data.json";

        private ILogger<AchievementController> _logger;
        List<Achievement> CreatedList;
        public AchievementController(ILogger<AchievementController> logger)
        {
            _logger = logger;

            string readText = System.IO.File.ReadAllText(path);
            CreatedList = JsonSerializer.Deserialize<List<Achievement>>(readText);
        }

        [HttpGet]
        public IEnumerable<Achievement> GetAll()
        {
            return CreatedList;
        }

        [HttpGet("{Id}")]
        public Achievement GetAchievementById(int Id)
        {

            Achievement achiv = CreatedList[CreatedList.FindIndex(elem => elem.Id == Id)];
            return achiv;
        }
    }
}
