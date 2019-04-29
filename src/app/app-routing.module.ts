import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { Roles } from './model/roles.enum';
import { StudentlistComponent } from './students/studentlist/studentlist.component';
import { NewstudentComponent } from './students/newstudent/newstudent.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"hey",component:HomeComponent,canActivate:[AuthGuard],data:{roles:[Roles.Instructor]}} ,
  {path:"students",component:StudentlistComponent,
  children:[
    {path:"new",component:NewstudentComponent}
  ]
  ,canActivate:[AuthGuard]},
  {path:"",redirectTo:"/login",pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
