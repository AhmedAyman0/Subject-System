import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Instructor } from 'src/app/instructors/instructor';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  inst:Instructor;

  constructor(private logserv:LoginService,private router:Router) { }

  login(form:NgForm){
    console.log(form.value);
    
    this.logserv.login(form.value).subscribe(
      resp=>{
        console.log(resp);
        
        let token=(<any>resp).token;
        localStorage.setItem('jwt',token);
        this.invalidLogin=false;
        this.router.navigateByUrl('/');
      },
      err=>this.invalidLogin=true
    );
  }

  logOut() {
    localStorage.removeItem("jwt");
 }

  ngOnInit() {
  }

}
