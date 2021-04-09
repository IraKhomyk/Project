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
            return await _context.Achievements.FirstOrDefaultAsync(x => x.Id == achievementId, cancellationToken);
        }

        public async Task CreateAchievement(Achievement achievement, CancellationToken cancellationToken)
        {
            await _context.Achievements.AddAsync(achievement, cancellationToken);
        }

        public async Task UpdateAchievement(Achievement achievement, CancellationToken cancellationToken)
        {
            if (_context != null)
            {
                _context.Achievements.Update(achievement);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteAchievement(Guid AchievementId, CancellationToken cancellationToken)
        {
            var achievement = await _context.Achievements.FindAsync(AchievementId, cancellationToken);
            _context.Achievements.Attach(achievement);
            _context.Achievements.Remove(achievement);
        }
    }
}
