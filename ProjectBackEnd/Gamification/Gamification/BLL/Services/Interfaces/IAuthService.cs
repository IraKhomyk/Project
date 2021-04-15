using Gamification.BLL.DTO;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.BLL.Services.Interfaces
{
    public interface IAuthService
    {
        public Task<string> Login(string password, string email, CancellationToken cancellationToken);
        public Task<User> AuthenticateUser(string email, string password, CancellationToken cancellationToken);
    }
}
