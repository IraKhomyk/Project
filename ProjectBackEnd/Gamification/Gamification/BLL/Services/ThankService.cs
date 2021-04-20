using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repositories;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public class ThankService : IThankService
    {
        private readonly IMapper _mapper;
        public IUnitOfWork _unitOfWork { get; set; }

        public ThankService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public async Task<ThankDTO> SayThank(ThankDTO newThank, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Thank>(newThank);
            User currentUser = await _unitOfWork.userRepository.GetCurrentUser(cancellationToken);

            var thank = await _unitOfWork.thankRepository.SayThank(currentUser, mapData, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }

        public async Task<ThankDTO> GetLastThank(CancellationToken cancellationToken)
        {
            User currentUser = await _unitOfWork.userRepository.GetCurrentUser(cancellationToken);
            Guid currentUserId = currentUser.Id;

            Thank thank = await _unitOfWork.thankRepository.GetLastThank(currentUserId, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }
    }
}
