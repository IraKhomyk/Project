import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user$.pipe(switchMap((user) => {
        
      if (!user || !user.token) {
        return next.handle(req);
      }

      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`
        }
      });

      return next.handle(req);
    }));
  }

}
