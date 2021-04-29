import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/modules/auth/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { GetUser } from '../../models/getUser';
import { OtherUser } from '../../models/other-user';
import { Thank } from '../../models/thank';
import { AuthUserService } from '../auth-user-service/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userDataSource$: BehaviorSubject<Array<GetUser>> = new BehaviorSubject([]);
  otherUser$: BehaviorSubject<OtherUser> = new BehaviorSubject(null as unknown as OtherUser);
  constructor(private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
    private readonly authUserService: AuthUserService) {
  }

  updateUser(firstName: string, lastName: string, email: string, status: string): Observable<User> {
    const body = {
      firstName,
      lastName,
      email,
      status
    };

    const userId = this.authUserService.authUser.id;

    return this.httpClient.put<User>(`${environment.apiUrl}user?userId=${userId}`, body, { withCredentials: true }).pipe(tap(user => {
      this.authService.user$.next(user);
      this.authUserService.authUser = user;
    }));
  }

  getAllUsers(): Observable<GetUser[]> {
    return this.httpClient.get<GetUser[]>(`${environment.apiUrl}user`, { withCredentials: true })
      .pipe(tap(users => {
        this.userDataSource$.next(users);
        this.authUserService.users = users;
      }));
  }

  getAllUsersShortInfo(): Observable<OtherUser[]> {
    return this.httpClient.get<OtherUser[]>(`${environment.apiUrl}user/short-info`, { withCredentials: true })
      .pipe(tap(users => {
        this.userDataSource$.next(users);
        this.authUserService.usersShort = users;
      }));
  }

  changePassword(oldpassword: string, newPassword: string, confirmPassword: string): Observable<User> {
    const params = new HttpParams().set('oldpassword', oldpassword)
      .set('newPassword', newPassword)
      .set('confirmPassword', confirmPassword);

    return this.httpClient.put<User>(`${environment.apiUrl}profile/change-password?${params.toString()}`, {}, { withCredentials: true })
      .pipe(tap(user => {
        this.authService.user$.next(user);
      }));
  }

  getUserById(userId: string): Observable<OtherUser> {
    const params = new HttpParams().set("Id", userId);

    return this.httpClient.get<OtherUser>(`${environment.apiUrl}user/id?${params.toString()}`, { withCredentials: true })
      .pipe(tap(user => {
        this.otherUser$.next(user);
        this.authUserService.userById = user;
      }))
  }

  getLastThank(): Observable<Thank> {
    return this.httpClient.get<Thank>(`${environment.apiUrl}thank`, { withCredentials: true })
      .pipe(tap(thank => {
        this.authUserService.userLastThank = thank;
      }))
  }

  sayThank(text: string, toUserId: string,): Observable<Thank> {
    const body = {
      text,
      toUserId
    };

    return this.httpClient.post<Thank>(`${environment.apiUrl}thank`, body, { withCredentials: true })
      .pipe(tap(thank => {
        console.log(thank);
      }))
  }
}
