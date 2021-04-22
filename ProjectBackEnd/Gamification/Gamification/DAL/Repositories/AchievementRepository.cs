using AutoMapper;
using Gamification.DAL.IRepository;
using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repository
{
    public class AchievementRepository : IAchievementRepository
    {
        private MyContext _context;

        public AchievementRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Achievement>> GetAllAchievements(CancellationToken cancellationToken)
        {
            var achievements = _context.Achievements;

            return await achievements.ToListAsync(cancellationToken);
        }

        public async Task<Achievement> GetAchievementById(Guid achievementId, CancellationToken cancellationToken)
        {
            Achievement achievement = await _context.Achievements.FirstOrDefaultAsync(x => x.Id == achievementId, cancellationToken);

            return achievement;
        }

        public async Task<Achievement> CreateAchievement(Achievement achievement, CancellationToken cancellationToken)
        {
            var guid = Guid.NewGuid();
            achievement.Id = guid;
            await _context.Achievements.AddAsync(achievement, cancellationToken);

            return achievement;
        }

        public async Task<Achievement> UpdateAchievement(Guid achievementId, Achievement newAchievement, CancellationToken cancellationToken)
        {
            var achievement = await _context.Achievements.FirstOrDefaultAsync(x => x.Id == achievementId, cancellationToken);
            if (achievement != null)
            {
                achievement.Id = achievementId;
                achievement.Name = newAchievement.Name;
                achievement.Xp = newAchievement.Xp;
                achievement.Description = newAchievement.Description;
                achievement.IconId = newAchievement.IconId;

                _context.Achievements.Update(achievement);
                await _context.SaveChangesAsync();
            }

            return achievement;
        }

        public async Task<Achievement> DeleteAchievement(Guid AchievementId, CancellationToken cancellationToken)
        {
            var achievement = await _context.Achievements.FirstOrDefaultAsync(x => x.Id == AchievementId, cancellationToken);
            _context.Achievements.Attach(achievement);
            _context.Achievements.Remove(achievement);

            return achievement;
        }
    }
}
