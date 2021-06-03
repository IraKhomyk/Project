import { Achievement } from "./achievement";

export interface OtherUser{
    id: string;
    firstName: string;
    lastName: string;
    status: string;
    xp: number;
    badges: number;
    avatarId: string;
    achievements: Achievement[];
}