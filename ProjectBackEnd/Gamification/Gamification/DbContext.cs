using Gamification.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification
{
    public class MyContext : DbContext
    {
        public DbSet<Achievement> Achievements { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserAchievement> UserAchievements { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }

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

            modelBuilder.Entity<UserAchievement>()
                .ToTable("UserAchievements");

            modelBuilder.Entity<User>()
                .ToTable("Users");

            modelBuilder.Entity<Role>()
                .ToTable("Roles");

            modelBuilder.Entity<UserRole>()
                .ToTable("UserRoles");

            modelBuilder.Entity<UserAchievement>()
                .HasKey(bc => new { bc.AchievementId, bc.UserId });

            modelBuilder.Entity<UserAchievement>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserAchievements)
                .HasForeignKey(b => b.UserId);

            modelBuilder.Entity<UserAchievement>()
                .HasOne(bc => bc.Achievement)
                .WithMany(b => b.UserAchievements)
                .HasForeignKey(b => b.AchievementId);

            modelBuilder.Entity<UserRole>()
                .HasKey(bc => new { bc.RoleId, bc.UserId });

            modelBuilder.Entity<UserRole>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.UserRoles)
                .HasForeignKey(b => b.UserId);

            modelBuilder.Entity<UserRole>()
                .HasOne(bc => bc.Role)
                .WithMany(b => b.UserRoles)
                .HasForeignKey(b => b.RoleId);

        }
    }
}
