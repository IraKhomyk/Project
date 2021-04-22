export interface User {
    token: string;
    refreshToken: string;
    tokenExpiration: string;
    id: string;
    userName: string;
    firstName: string;
    lastName: string;
    email: string;
    status: string;
    xp: number;
    badgesCount: number;
    roles: Roles[];
    avatarId: string;
  }