import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { AuthService } from "src/app/modules/auth/services/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly authService: AuthService, private router: Router) { }


    // canActivate(): Observable<boolean | UrlTree> {
    //     return this.authService.user$.pipe(map(user => {
    //         debugger;
    //         if (!user) {
    //             this.authService.isAuthenticated().subscribe(user => {
    //                 if (!user) {
    //                     return this.router.createUrlTree(['/login']);
    //                 } else {
    //                     return true;
    //                 }
    //             });
    //         }
    //         else {
    //             return true;
    //         }
    //         //  return !!user ? true : this.router.createUrlTree(['/login']);
    //     }));
    // }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.getCurrentUser().pipe(
          map(user => !!user),
          tap(isLogged => {
            if (!isLogged) {
              this.router.navigateByUrl('/login');
            }
          })
        );
      }
}