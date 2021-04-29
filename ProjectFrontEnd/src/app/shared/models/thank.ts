import { OtherUser } from "./other-user";

export interface Thank {
    fromUser: OtherUser;
    toUserId: string;
    text: string;
}