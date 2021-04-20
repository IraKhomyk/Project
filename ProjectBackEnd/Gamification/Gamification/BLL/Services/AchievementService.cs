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
        public IUnitOfWork _unitOfWork { get; set; }

        public AchievementService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public async Task<IEnumerable<AchievementDTO>> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements = await _unitOfWork.achievementRepository.GetAllAchievements(cancellationToken);

            return _mapper.Map<IEnumerable<AchievementDTO>>(achievements);
        }

        public async Task<AchievementDTO> GetAchievementById(Guid Id, CancellationToken cancellationToken)
        {
            Achievement achievement = await _unitOfWork.achievementRepository.GetAchievementById(Id, cancellationToken);

            return _mapper.Map<AchievementDTO>(achievement);
        }

        public async Task<Achievement> CreateAchievement(AchievementDTO newAchievement, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Achievement>(newAchievement);
            var achievement = await _unitOfWork.achievementRepository.CreateAchievement(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);

            return achievement;
        }

        public async Task<Achievement> UpdateAchievement(Guid achievementId, AchievementDTO newAchievement, CancellationToken cancellationToken)
        {

            var mapData = _mapper.Map<Achievement>(newAchievement);
            var achievement = await _unitOfWork.achievementRepository.UpdateAchievement(achievementId, mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);

            return achievement;
        }

        public async Task<Achievement> DeleteAchievement(Guid achievemenId, CancellationToken cancellationToken)
        {
            var deletedAchievement = await _unitOfWork.achievementRepository.DeleteAchievement(achievemenId, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);

            return deletedAchievement;
        }

        public async Task<UserAchievementsDTO> GetAllUserAchievements(CancellationToken cancellationToken)
        {
            User achievement = await _unitOfWork.achievementRepository.GetAllUserAchievements(cancellationToken);

            return _mapper.Map<UserAchievementsDTO>(achievement);
        }
    }
}
