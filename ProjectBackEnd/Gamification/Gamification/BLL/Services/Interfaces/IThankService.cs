using Gamification.DAL.Repositories;
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
        public Task<ThankDTO> SayThankAsync(ThankDTO newThank, CancellationToken cancellationToken);
        public Task<ThankDTO> GetLastThankAsync(CancellationToken cancellationToken);
    }
}
