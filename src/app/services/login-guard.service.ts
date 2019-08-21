import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {
  
  constructor(private auth:AuthenticationService,
    private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean>|boolean {
    if(this.auth.isUserLoggedIn()){
      return true;
    }else {
      this.router.navigate(['/login'])
      return false;
    }
   
  }


}
