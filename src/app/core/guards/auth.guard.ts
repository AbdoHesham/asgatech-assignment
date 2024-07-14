import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class authGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router , ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.IsLoggedIn) {
      this.authService.login()

      return false;
    }
    return true;
  }
  
}



// import { CanActivateFn } from '@angular/router';
// import { Injector } from '@angular/core';
// import { AuthService } from '../services/auth.service';
// export const authGuard: CanActivateFn = (route, state) => {
//   const injector = Injector.create({providers: [{provide: AuthService, deps: []}]});
//   const authService = injector.get(AuthService);
  
//   return authService.IsLoggedIn;
// };
