import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './home/components/nav/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/components/nav/login/login.component';
import { DashboardComponent } from './home/components/nav/dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { FarmerpostFormComponent } from './home/components/nav/dashboard/farmer/farmerpost-form/farmerpost-form.component';
import { PostDetailsComponent } from './home/components/nav/dashboard/farmer/post-details/post-details.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard2', component:Dashboard2Component},
  {path:'dashboard', component:DashboardComponent, children: [
    {path:'farmerpost-form', component:FarmerpostFormComponent},
    {path:'post-details', component:PostDetailsComponent},
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
