using Gamification.DAL.IRepositories;
using Gamification.DAL.IRepository;
using Gamification.DAL.Repositories;
using Microsoft.AspNetCore.Http;
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
        private IThankRepository _thankRepository;
        private MyContext _context;

        private readonly IHttpContextAccessor _httpContextAccessor;
        public UnitOfWork(MyContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
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
                    this._userRepository = new UserRepository(_context, _httpContextAccessor);
                }
                return _userRepository;
            }
            set
            {

            }
        }

        public IThankRepository thankRepository
        {
            get
            {
                if (this._thankRepository == null)
                {
                    this._thankRepository = new ThankRepository(_context);
                }
                return _thankRepository;
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
