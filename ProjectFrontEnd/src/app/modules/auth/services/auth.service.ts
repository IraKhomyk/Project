import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../models/user";
import { tap } from 'rxjs/operators';
import { AuthUserService } from "src/app/core/services/auth-user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: BehaviorSubject<User> = new BehaviorSubject(null as unknown as User);

    private apiUrl = 'https://localhost:44395/api/';

    constructor(private httpClient: HttpClient, private readonly authUserService:AuthUserService) { }

    authenticate(userName: string, password: string): Observable<User> {
        const body = {
            userName,
            password
        };

        return this.httpClient.post<User>(`${this.apiUrl}authenticate`, body).pipe(tap(user => {
            this.user$.next(user);
            this.authUserService.authUser = user;
            console.log( this.authUserService.authUser);
        }));

    }
}