using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.IRepositories
{
    public interface IUserRepository
    {
        public Task<IEnumerable<User>> GetAllUsers(CancellationToken cancellationToken);
        public Task<User> GetUserById(Guid userId, CancellationToken cancellationToken);
        public Task<User> CreateUser(User user, CancellationToken cancellationToken);
        public Task<User> UpdateUser(Guid userId, User user, CancellationToken cancellationToken);
        public Task<User> DeleteUser(Guid userId, CancellationToken cancellationToken);
        public Task<User> AuthenticateUser(string userName, string password, CancellationToken cancellationToken);

    }
}
