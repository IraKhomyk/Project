using Gamification.DAL.IRepositories;
using Gamification.DAL.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repository.UnitOfWork
{
    public interface IUnitOfWork
    {
        Task SaveChanges(CancellationToken cancellationToken);
        IAchievementRepository achievementRepository { get; set; }
        IUserRepository userRepository { get; set; }
        IThankRepository thankRepository { get; set; }

    }
}
