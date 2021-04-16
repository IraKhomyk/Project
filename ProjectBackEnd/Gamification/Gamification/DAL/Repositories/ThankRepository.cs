using Gamification.DAL.IRepositories;
using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Gamification.DAL.Repositories
{
    public class ThankRepository : IThankRepository
    {
        private MyContext _context;

        public ThankRepository(MyContext context)
        {
            _context = context;
        }

        public async Task<Thank> GetLastThank(CancellationToken cancellationToken)
        {
            Thank lastThank = await _context.Thanks.OrderByDescending(x => x.AddedTime).FirstOrDefaultAsync(cancellationToken);

            return lastThank;
        }

        public async Task<Thank> SayThank(Thank newThank, CancellationToken cancellationToken)
        {
            var guid = Guid.NewGuid();
            newThank.Id = guid;
            newThank.AddedTime = DateTime.Now;
            await _context.Thanks.AddAsync(newThank, cancellationToken);
            await _context.SaveChangesAsync();

            return newThank;
        }
    }
}
