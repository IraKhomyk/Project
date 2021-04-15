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
            var users = _context.Users.Include(a => a.Roles);

            return await users.ToListAsync(cancellationToken);
        }

        public async Task<User> GetUserById(Guid userId, CancellationToken cancellationToken)
        {
            return await _context.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
        }

        public async Task CreateUser(User user, CancellationToken cancellationToken)
        {
            var guid = Guid.NewGuid();
            user.Id = guid;
            await _context.Users.AddAsync(user, cancellationToken);
        }

        public async Task UpdateUser(Guid userId, User newUser, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
            if (user != null)
            {
                user.Password = user.Password;
                user.Id = userId;
                user.FirstName = newUser.FirstName;
                user.LastName = newUser.LastName;
                user.Email = newUser.Email;
                user.Status = newUser.Status;
                user.UserName = newUser.UserName;
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
            _context.Users.Attach(user);
            _context.Users.Remove(user);
        }

        public async Task<User> AuthenticateUser(string email, string password, CancellationToken cancellationToken)
        {
            return await _context.Users.Include(a => a.Roles).SingleOrDefaultAsync(x => x.Email == email && x.Password == password, cancellationToken);
        }
    }
}

