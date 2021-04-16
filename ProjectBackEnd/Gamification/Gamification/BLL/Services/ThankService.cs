using AutoMapper;
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

        public async Task<Thank> SayThank(Guid fromUserId, ThankDTO newThank, CancellationToken cancellationToken)
        {
            var mapData = _mapper.Map<Thank>(newThank);
            var thank = await _unitOfWork.thankRepository.SayThank(fromUserId, mapData, cancellationToken);

            return thank;
        }

        public async Task<ThankDTO> GetLastThank(Guid userId, CancellationToken cancellationToken)
        {
            Thank thank = await _unitOfWork.thankRepository.GetLastThank(userId, cancellationToken);

            return _mapper.Map<ThankDTO>(thank);
        }
    }
}
