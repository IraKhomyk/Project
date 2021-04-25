using System;

namespace Gamification.DAL.Repositories
{
    public class ThankDTO
    {
        public string Text { get; set; }
        public Guid ToUserId { get; set; }
    }
}
