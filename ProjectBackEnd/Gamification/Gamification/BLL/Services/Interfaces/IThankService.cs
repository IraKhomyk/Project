using Gamification.BLL.DTO;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IThankService
    {
        public Task<Thank> SayThank(ThankDTO newThank, CancellationToken cancellationToken);

        public Task<ThankDTO> GetLastThank(Guid toUserId, CancellationToken cancellationToken);
    }
}
