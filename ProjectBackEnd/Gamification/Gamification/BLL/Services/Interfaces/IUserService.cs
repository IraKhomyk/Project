using Gamification.BLL.DTO;
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
        public Task CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken);
        public Task UpdateUser(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken);
        public Task DeleteUser(Guid userId, CancellationToken cancellationToken);
    }
}
