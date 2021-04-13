using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services
{
    public class AchievementService : IAchievementService
    {
        private readonly IMapper _mapper;
        public IUnitOfWork UnitOfWork { get; set; }


        public AchievementService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.UnitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public async Task<IEnumerable<AchievementDTO>> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements = await UnitOfWork.achievementRepository.GetAllAchievements(cancellationToken);
            return _mapper.Map<IEnumerable<AchievementDTO>>(achievements);
        }

        public async Task<AchievementDTO> GetAchievementById(Guid Id, CancellationToken cancellationToken)
        {
            Achievement achievement = await UnitOfWork.achievementRepository.GetAchievementById(Id, cancellationToken);
            return _mapper.Map<AchievementDTO>(achievement);
        }
        public async Task CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Achievement>(newAchievement);
            await UnitOfWork.achievementRepository.CreateAchievement(mapData, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }

        public async Task UpdateAchievement(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken)
        {

            var mapData = _mapper.Map<Achievement>(newAchievement);
            await UnitOfWork.achievementRepository.UpdateAchievement(achievementId, mapData, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }

        public async Task DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken)
        {
            await UnitOfWork.achievementRepository.DeleteAchievement(achievemenId, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }


    }
}
