import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  errorMessage='Invalid Credentials';
  invalidCredentials=false;
  constructor(private router:Router,
    private auth:AuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){
    this.auth.authenticate(this.username,this.password);
    this.router.navigate(['/welcome',this.username]);
  }

}
