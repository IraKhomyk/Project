using Gamification.DAL.Repositories;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IThankService
    {
        public Task<ThankDTO> SayThankAsync(Guid userId, ThankDTO newThank, CancellationToken cancellationToken);
        public Task<ThankDTO> GetLastThankAsync(Guid userId, CancellationToken cancellationToken);
    }
}
