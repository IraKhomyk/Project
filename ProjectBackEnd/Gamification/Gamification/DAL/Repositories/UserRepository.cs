using Gamification.DAL.IRepositories;
using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private MyContext _context;

        public UserRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllUsers(CancellationToken cancellationToken)
        {
            var users = _context.Users;

            return await users.ToListAsync(cancellationToken);
        }

        public async Task<User> GetUserById(Guid userId, CancellationToken cancellationToken)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
        }

        public async Task CreateUser(User user, CancellationToken cancellationToken)
        {
            var guid = new Guid();
            user.Id = guid;
            await _context.Users.AddAsync(user, cancellationToken);
        }

        public async Task UpdateUser(User user, CancellationToken cancellationToken)
        {
            if (_context != null)
            {
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
        }
        public async Task DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FindAsync(userId, cancellationToken);
            _context.Users.Attach(user);
            _context.Users.Remove(user);
        }
    }
}

