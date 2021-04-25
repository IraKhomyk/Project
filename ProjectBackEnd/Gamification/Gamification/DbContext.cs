using Gamification.Models;
using Microsoft.EntityFrameworkCore;

namespace Gamification
{
    public class MyContext : DbContext
    {
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<Thank> Thanks { get; set; }

        public MyContext(DbContextOptions<MyContext> options) : base(options)
        {
        }

        public MyContext()
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Achievement>()
                .ToTable("Achievements");

            modelBuilder.Entity<User>()
                .ToTable("Users");

            modelBuilder.Entity<Role>()
                .ToTable("Roles");

            modelBuilder.Entity<Thank>()
                .ToTable("Thanks");

            modelBuilder.Entity<Thank>()
              .HasMany(x => x.Users)
              .WithOne(x => x.Thank);
        }
    }
}
