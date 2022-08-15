import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 // registerForm: FormGroup;

  constructor( private router :Router) { }
  login() {
    this.router.navigate(['/register'])
  }

  ngOnInit(): void {
   // this.registerForm = this.fb.group({
      //name: ['', Validators.required],
      //email: ['', Validators.required],
      //password: ['', Validators.required],
      //repassword: ['', Validators.required],
   // });
    
  }
 // private  fb: FormBuilder 
 
}
