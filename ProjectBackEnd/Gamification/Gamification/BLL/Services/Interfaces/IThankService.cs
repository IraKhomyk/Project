using Gamification.DAL.Repositories;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IThankService
    {
        public Task<CreateThankDTO> SayThankAsync(Guid userId, CreateThankDTO newThank, CancellationToken cancellationToken);
        public Task<GetThank> GetLastThankAsync(Guid userId, CancellationToken cancellationToken);
    }
}
