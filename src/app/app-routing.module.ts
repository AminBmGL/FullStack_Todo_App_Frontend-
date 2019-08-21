import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginGuardService } from './services/login-guard.service';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:LoginComponent},
  {path:"welcome/:name",component:WelcomeComponent,canActivate:[LoginGuardService]},
  {path:'todos',component:ListTodosComponent,canActivate:[LoginGuardService]},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
