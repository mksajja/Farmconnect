import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:Dashboard2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
