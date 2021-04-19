using AutoMapper;
using Gamification.BLL.DTO;
using Gamification.DAL.Repositories;
using Gamification.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        }
    }
}
