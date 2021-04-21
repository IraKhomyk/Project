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

        public async Task<ThankDTO> SayThankAsync(ThankDTO newThank, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Thank>(newThank);
            User currentUser = await _unitOfWork.userRepository.GetCurrentUserAsync(cancellationToken);

            var thank = await _unitOfWork.thankRepository.SayThankAsync(currentUser, mapData, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }

        public async Task<ThankDTO> GetLastThankAsync(CancellationToken cancellationToken)
        {
            User currentUser = await _unitOfWork.userRepository.GetCurrentUserAsync(cancellationToken);
            Guid currentUserId = currentUser.Id;

            Thank thank = await _unitOfWork.thankRepository.GetLastThankAsync(currentUserId, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }
    }
}
