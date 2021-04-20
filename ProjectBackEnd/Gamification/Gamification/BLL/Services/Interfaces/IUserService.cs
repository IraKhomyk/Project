using Gamification.BLL.DTO;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IUserService
    {
        public Task<IEnumerable<UserDTO>> GetAllUsers(CancellationToken cancellationToken);
        public Task<UserDTO> GetUserById(Guid Id, CancellationToken cancellationToken);
        public Task<User> CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken);
        public Task<User> UpdateUser(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken);
        public Task<User> DeleteUser(Guid userId, CancellationToken cancellationToken);
        public Task<UserDTO> GetCurrentUser(CancellationToken cancellationToken);
    }
}
