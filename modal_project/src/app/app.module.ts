import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { ProfileComponent } from './Dashboard/Components/profile/profile.component';
import { JobsComponent } from './Dashboard/Components/jobs/jobs.component';
import { HeaderComponent } from './Dashboard/Components/header/header/header.component';

const routes:Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'dashboard',component:DashboardComponent,
    children:[
      {path:'profile',component:ProfileComponent},
      {path:'jobs',component:JobsComponent},
      {path:'',redirectTo:'./'+'dashboard'+'profile',pathMatch:'full'}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HeaderComponent,
    ProfileComponent,
    JobsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
