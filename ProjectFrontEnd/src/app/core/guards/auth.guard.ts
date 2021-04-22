import { Injectable } from "@angular/core";
import { CanActivate, Router, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService, private router: Router) { }

    canActivate(): Observable<boolean | UrlTree> {
        return this.authService.user$.pipe(map(user => {
            return !!user ? true : this.router.createUrlTree(['/login']);
        }));
    }
}