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

namespace Gamification.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AchievementController : ControllerBase
    {
        private readonly IMapper _mapper;
        private IUnitOfWork _unitOfWork { get; set; }
        public AchievementController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements = await _unitOfWork.achievementRepository.GetAllAchievements(cancellationToken);
            var mapData = _mapper.Map<IEnumerable<AchievementDTO>>(achievements);
            return Ok(mapData);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetAchievementById(Guid Id, CancellationToken cancellationToken)
        {
            var achievement = await _unitOfWork.achievementRepository.GetAchievementById(Id, cancellationToken);
            var mapData = _mapper.Map<AchievementDTO>(achievement);
            return Ok(mapData);
        }

        [HttpPost]
        public async Task<IActionResult> CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Achievement>(newAchievement);
            var achievement = _unitOfWork.achievementRepository.CreateAchievement(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(achievement);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Achievement>(newAchievement);
            var achievement = _unitOfWork.achievementRepository.UpdateAchievement(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(achievement);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken)
        {
            var deletedAcievement = _unitOfWork.achievementRepository.DeleteAchievement(achievemenId, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(deletedAcievement);
        }
    }
}
