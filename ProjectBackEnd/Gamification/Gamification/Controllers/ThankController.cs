using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repositories;
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
    public class ThankController : ControllerBase
    {
        private IThankService _thankService { get; set; }
        public ThankController(IThankService thankService)
        {
            _thankService = thankService;
        }

        [HttpGet]
        public async Task<ActionResult<ThankDTO>> GetLastThank(CancellationToken cancellationToken)
        {
            try
            {
                var lastThank = await _thankService.GetLastThank(cancellationToken);
                return Ok(lastThank);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ThankDTO>> SayThank(ThankDTO newThank, CancellationToken cancellationToken)
        {
            try
            {
                var thank = await _thankService.SayThank(newThank, cancellationToken);
                return Ok(thank);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}