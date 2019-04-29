import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router,private jwtHelper:JwtHelperService ) {
    
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var token = localStorage.getItem("jwt");
 console.log(next.data);
 
      if (token && !this.jwtHelper.isTokenExpired(token)&&next.data){
        console.log(this.jwtHelper.decodeToken(token));
        
        
        return true;
      }
      this.router.navigate(["login"]);
      return false;
  }
  
}
