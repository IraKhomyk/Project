using Gamification.DAL.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repository.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private IAchievementRepository _achievementRepository;
        private MyContext _context;

        public UnitOfWork(MyContext context)
        {
            _context = context;
        }
        public IAchievementRepository achievementRepository { 
            get
            {
                if (this._achievementRepository == null)
                {
                    this._achievementRepository = new AchievementRepository(_context);
                }
                return _achievementRepository;
            }
            set
            {

            }
        }

        public async Task SaveChanges(CancellationToken cancellationToken)
        {
            await _context.SaveChangesAsync(cancellationToken);
        }
    }
}
