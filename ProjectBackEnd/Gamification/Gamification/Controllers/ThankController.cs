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
    [Route("api/thank")]
    [ApiController]
    [Authorize]
    public class ThankController : ControllerBase
    {
        private IThankService _thankService { get; set; }
        public ThankController(IThankService thankService)
        {
            _thankService = thankService;
        }

        [HttpGet]
        public async Task<ActionResult<ThankDTO>> GetLastThankAsync(CancellationToken cancellationToken)
        {
            try
            {
                var lastThank = await _thankService.GetLastThankAsync(cancellationToken);
                return Ok(lastThank);
            }
            catch
            {
                return StatusCode(500);
            }
        }

        [HttpPost]
        public async Task<ActionResult<ThankDTO>> SayThankAsync(ThankDTO newThank, CancellationToken cancellationToken)
        {
            try
            {
                var thank = await _thankService.SayThankAsync(newThank, cancellationToken);
                return Ok(thank);
            }
            catch
            {
                return StatusCode(500);
            }
        }
    }
}