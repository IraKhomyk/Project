using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repositories;
using Gamification.Models;

namespace Gamification
{
    public class AutoMappingProfile : Profile
    {
        public AutoMappingProfile()
        {
            CreateMap<Achievement, AchievementDTO>();
            CreateMap<AchievementDTO, Achievement>();

            CreateMap<User, UserDTO>();
            CreateMap<UserDTO, User>();

            CreateMap<User, CreateUserDTO>();
            CreateMap<CreateUserDTO, User>();

            CreateMap<User, UpdateUserDTO>();
            CreateMap<UpdateUserDTO, User>();

            CreateMap<Role, RoleDTO>();
            CreateMap<RoleDTO, Role>();

            CreateMap<Thank, ThankDTO>();
            CreateMap<ThankDTO, Thank>();

            CreateMap<User, UserAchievementsDTO>();
            CreateMap<UserAchievementsDTO, User>();

            CreateMap<User, AuthenticationUserDTO>();
            CreateMap<AuthenticationUserDTO, User>();
        }
    }
}
