using Gamification.DAL.IRepositories;
using Gamification.DAL.IRepository;
using Gamification.DAL.Repositories;
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
        private IUserRepository _userRepository;
        private MyContext _context;

        public UnitOfWork(MyContext context)
        {
            _context = context;
        }
        public IAchievementRepository achievementRepository
        {
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
        public IUserRepository userRepository
        {
            get
            {
                if (this._userRepository == null)
                {
                    this._userRepository = new UserRepository(_context);
                }
                return _userRepository;
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
