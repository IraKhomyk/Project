using AutoMapper;
using Gamification.DAL.Repositories;
using Gamification.DAL.Repository.UnitOfWork;
using Gamification.Models;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public class ThankService : IThankService
    {
        private readonly IMapper _mapper;
        private IUnitOfWork _unitOfWork { get; set; }

        public ThankService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            this._unitOfWork = unitOfWork;
            this._mapper = mapper;
        }

        public async Task<ThankDTO> SayThankAsync(Guid userId, ThankDTO newThank, CancellationToken cancellationToken)
        {
            Thank mapData = _mapper.Map<Thank>(newThank);
            User currentUser = await _unitOfWork.userRepository.GetCurrentUserAsync(userId, cancellationToken);

            Thank thank = await _unitOfWork.thankRepository.SayThankAsync(currentUser, mapData, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }

        public async Task<ThankDTO> GetLastThankAsync(Guid userId, CancellationToken cancellationToken)
        {
            User currentUser = await _unitOfWork.userRepository.GetCurrentUserAsync(userId, cancellationToken);
            Guid currentUserId = currentUser.Id;

            Thank thank = await _unitOfWork.thankRepository.GetLastThankAsync(currentUserId, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }
    }
}
