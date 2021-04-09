using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Gamification.Models
{
    public class User : BaseEntity
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [StringLength(60, ErrorMessage = "User firstname cannot be longer that 60 characters")]
        public string FirstName { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        [StringLength(60, ErrorMessage = "User lastname cannot be longer that 60 characters")]
        public string LastName { get; set; }

        [Required]
        [StringLength(32, MinimumLength = 8)]
        [DataType(DataType.Password)]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])$", ErrorMessage = "Password must meet requirements")]
        public string Password { get; set; }

        public string Status { get; set; }

        [Required]
        public int Xp { get; set; }

        public Guid? AvatarId { get; set; }
       /* public ICollection<UserRole> UserRoles { get; set; }*/
        public ICollection<UserAchievement> UserAchievements { get; set; }


    }
}
