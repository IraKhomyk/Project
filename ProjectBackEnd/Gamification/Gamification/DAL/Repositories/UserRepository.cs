using Gamification.DAL.IRepositories;
using Gamification.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private MyContext _context;

        private readonly IHttpContextAccessor _httpContextAccessor;
        
        public UserRepository(MyContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IEnumerable<User>> GetAllUsers(CancellationToken cancellationToken)
        {
            var users = _context.Users.Include(a => a.Roles);

            return await users.ToListAsync(cancellationToken);
        }

        public async Task<User> GetUserById(Guid userId, CancellationToken cancellationToken)
        {
            return await _context.Users.Include(a => a.Roles).Include(b=>b.Thank).FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
        }

        public async Task<User> CreateUser(User newUser, CancellationToken cancellationToken)
        {
            var guid = Guid.NewGuid();
            newUser.Id = guid;
            await _context.Users.AddAsync(newUser, cancellationToken);
            await _context.SaveChangesAsync();
            return newUser;
        }

        public async Task<User> UpdateUser(Guid userId, User newUser, CancellationToken cancellationToken)
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
            return user;
        }

        public async Task<User> DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == userId, cancellationToken);
            _context.Users.Attach(user);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync(cancellationToken);
            return user;
        }

        public async Task<User> AuthenticateUser(string userName, string password, CancellationToken cancellationToken)
        {
            return await _context.Users.Include(a => a.Roles).SingleOrDefaultAsync(x => x.UserName == userName && x.Password == password, cancellationToken);
        }

        public async Task<User> GetCurrentUser(CancellationToken cancellationToken)
        {
            var userId = Guid.Parse(_httpContextAccessor.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier));
            User user = await GetUserById(userId, cancellationToken);

            return user;
        }
    }
}

