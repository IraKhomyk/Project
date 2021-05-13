import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "src/app/modules/auth/services/auth.service";
import { AuthUserService } from "src/app/shared/services/auth-user-service/auth-user.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly authService: AuthService,
    private readonly authUserService: AuthUserService,
    private router: Router) { }

  canActivate(): Observable<boolean | UrlTree> {
    const currentUser = this.authUserService.authUser;
    return this.authService.getCurrentUser().pipe(
      map(user => !!user),
      tap(isLogged => {
        if (!isLogged) {
          this.router.navigateByUrl('/login');
        }
      })
    );
  }


//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//     const currentUser = this.authUserService.authUser;
//     const role = this.authService.roleMatch();
//     if (currentUser) {
//         // check if route is restricted by role
//         if (!(route.data.roles === role)) {
//             // role not authorised so redirect to home page
//             this.router.navigate(['/login']);
//             return false;
//         }

//         // authorised so return true
//         return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
//     return false;
// }
}