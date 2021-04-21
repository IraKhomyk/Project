using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Gamification
{
    public class AuthOptions
    {

        public const string Issuer = "MyAuthServer"; 
        public const string Audience = "MyAuthClient"; 
        const string Secret = "mysupersecret_secretkey!123"; 
        public const int TokenLifeTime = 1; 
        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Secret));
        }
    }
}
