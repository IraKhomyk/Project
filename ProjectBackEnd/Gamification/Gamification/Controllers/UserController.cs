using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IMapper _mapper;
        private IUnitOfWork _unitOfWork { get; set; }
        public UserController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllUsers(CancellationToken cancellationToken)
        {
            var users = await _unitOfWork.userRepository.GetAllUsers(cancellationToken);
            var mapData = _mapper.Map<IEnumerable<UserDTO>>(users);
            return Ok(mapData);
        }

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetUserById(Guid Id, CancellationToken cancellationToken)
        {
            var user = await _unitOfWork.userRepository.GetUserById(Id, cancellationToken);
            var mapData = _mapper.Map<UserDTO>(user);
            return Ok(mapData);
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserDTO newUser, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<User>(newUser);
            var user = _unitOfWork.userRepository.CreateUser(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(user);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateUser(UpdateUserDTO newUser, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<User>(newUser);
            var user = _unitOfWork.userRepository.UpdateUser(mapData, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(user);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteUser(Guid userId, CancellationToken cancellationToken)
        {
            var deletedUser = _unitOfWork.userRepository.DeleteUser(userId, cancellationToken);
            await _unitOfWork.SaveChanges(cancellationToken);
            return Ok(deletedUser);
        }
    }
}
