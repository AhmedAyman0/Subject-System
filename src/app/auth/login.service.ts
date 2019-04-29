import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Instructor } from '../instructors/instructor';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl='https://localhost:44377/api'
  loginurl='https://localhost:44377/api/auth/login'
  login2url='https://localhost:44377/api/authent/login'
  constructor(private http:HttpClient) { }

  login(user:NgForm){
    return this.http.post<any>(this.loginurl,user);
    
  }
}
