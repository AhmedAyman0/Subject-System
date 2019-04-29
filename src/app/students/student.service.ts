import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl='https://localhost:44377/api/students'
  constructor(private http:HttpClient) { }

  getAll(){
    let token = localStorage.getItem('jwt');
    console.log('this'+token);
    
    return this.http.get<Student[]>(this.baseurl,{
      headers:new HttpHeaders({
        Authorization: "Bearer " + token      
      })
    }
      );
  }
}
