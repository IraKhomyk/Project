using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.IRepositories
{
    public interface IThankRepository
    {
        public Task<Thank> GetLastThank(Guid userId, CancellationToken cancellationToken);
        public Task<Thank> SayThank(Guid fromUserId, Thank newThank, CancellationToken cancellationToken);
    }
}
