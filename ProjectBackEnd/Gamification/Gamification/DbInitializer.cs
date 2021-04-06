using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification
{
    public class DbInitializer
    {
        public static void Initialize(MyContext context)
        {
            context.Database.EnsureCreated();

            context.SaveChanges();
        }
    }
}
