using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.BLL.Services.Interfaces;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services
{
    public class UserService : IUserService
    {
        private readonly IMapper _mapper;
        public IUnitOfWork UnitOfWork { get; set; }

        public UserService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this.UnitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public async Task<IEnumerable<UserDTO>> GetAllUsers(CancellationToken cancellationToken)
        {
            var users = await UnitOfWork.userRepository.GetAllUsers(cancellationToken);
            return _mapper.Map<IEnumerable<UserDTO>>(users);
        }

        public async Task<UserDTO> GetUserById(Guid Id, CancellationToken cancellationToken)
        {
            User user = await UnitOfWork.userRepository.GetUserById(Id, cancellationToken);
            return _mapper.Map<UserDTO>(user);
        }

        public async Task CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            User mapData = _mapper.Map<User>(newUser);
            await UnitOfWork.userRepository.CreateUser(mapData, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }

        public async Task UpdateUser(Guid userId, UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            User mapData = _mapper.Map<User>(newUser);
            await UnitOfWork.userRepository.UpdateUser(userId, mapData, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }

        public async Task DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            await UnitOfWork.userRepository.DeleteUser(userId, cancellationToken);
            await UnitOfWork.SaveChanges(cancellationToken);
        }

    }
}
