import { Injectable } from '@angular/core';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor() {   }
  getoken(){  
      return !localStorage.getItem("SeesionUser");  
      }  

}
