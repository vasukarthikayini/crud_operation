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
 //registerForm: FormGroup;
 data="hello"

  constructor( private router :Router) { }
  login() {
    var txt;
    if(confirm("login successfully!")) {
      txt= "ok move on the next process";
      this.router.navigate(['/register'])
      //console.log('inside the if condition', txt)
     }
    else(confirm('please enter valid email or password!')) 
    {
      
      txt = "move to home page";
      this.router.navigate(['/home'])
      //console.log('inside the else condition', txt)
}
    document.getElementById("demo").innerHTML = txt;
   
   
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
