using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Project.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        string path = @"C:/Users/flagman/Desktop/.NET/Project/Project/mock_data.json";

        private ILogger<AchievementController> _logger;
        List<Achievement> CreatedList;
        public AchievementController(ILogger<AchievementController> logger)
        {
            _logger = logger;

            string readText = System.IO.File.ReadAllText(path);
            CreatedList = JsonSerializer.Deserialize<List<Achievement>>(readText);
        }

        [HttpGet]
        public IEnumerable<Achievement> Get()
        {
            return CreatedList;
        }
    }
}
