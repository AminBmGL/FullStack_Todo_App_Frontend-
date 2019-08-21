import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }

  authenticate(username,passsword){
    sessionStorage.setItem('authenticatedUser',username)
  }

  isUserLoggedIn(){
    let user =sessionStorage.getItem('authenticatedUser')
    return !(user===null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser')
    this.router.navigate(["/login"]);
  }
}
