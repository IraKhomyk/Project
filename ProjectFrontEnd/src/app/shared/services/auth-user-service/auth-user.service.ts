import { Injectable } from "@angular/core";
import { User } from "src/app/modules/auth/models/user";
import { GetUser } from "../../models/getUser";
import { OtherUser } from "../../models/other-user";
import { Thank } from "../../models/thank";

@Injectable({
    providedIn: 'root'
})
export class AuthUserService {
    authUser: User;

    users: GetUser[];

    userById: OtherUser;

    userLastThank: Thank;

    usersShort: OtherUser[];
}