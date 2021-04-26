import { Injectable } from "@angular/core";
import { User } from "src/app/modules/auth/models/user";
import { GetUser } from "../../models/getUser";

@Injectable({
    providedIn: 'root'
})
export class AuthUserService {
    authUser: User;

    users: GetUser[];
}