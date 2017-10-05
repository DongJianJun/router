import { NgModule } from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {LoginGuard} from './guard/login.guard';
import {UserResolve} from './guard/user.resolve';
import {UserService} from './shared/user.service';
import {LoggerService} from './shared/logger.service';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home/:userName', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard, UserResolve, UserService, LoggerService]
})
export class AppRoutingModule { }
