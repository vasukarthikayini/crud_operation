import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from './authguard.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authservice: AuthguardService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!!this.authservice.getoken()) {
        this.router.navigateByUrl("/login"); 
        }
        return this.authservice.getoken(); 
      } 
    }
   
   

