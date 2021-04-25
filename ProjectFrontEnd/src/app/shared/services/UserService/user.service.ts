import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/modules/auth/models/user';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { AuthUserService } from '../AuthUser/auth-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}
