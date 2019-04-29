import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import {JwtModule} from '@auth0/angular-jwt';
import { StudentlistComponent } from './students/studentlist/studentlist.component'
import {BrowserAnimationsModule,} from '@angular/platform-browser/animations';
import { NewstudentComponent } from './students/newstudent/newstudent.component';
import {
  MatSelectModule,
  MatOptionModule,
  MatToolbarModule, 
  MatButtonModule,
   MatSidenavModule,
   MatIconModule,
   MatListModule ,
   MatStepperModule,
   MatInputModule,
   MatFormFieldModule
  } from '@angular/material';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StudentlistComponent,
    NewstudentComponent
  ],
  imports: [
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatToolbarModule, 
    MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule ,
     MatStepperModule,
     MatInputModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['example.com'],
        blacklistedRoutes: ['example.com/examplebadroute/']
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
