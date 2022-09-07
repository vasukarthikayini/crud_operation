import { Component, OnInit } from '@angular/core';

import { EmailValidator, FormGroup, Validators } from '@angular/forms';
import { FormBuilder, Validator } from '@angular/forms';
import { getMatFormFieldMissingControlError } from '@angular/material/form-field';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
 //registerForm: FormGroup;
 //data="hello"
 //this.LoginForm = this.FormBuilder.group

//data = {
    //'email': 'email',
     //'password': 'password'
    //}

  title: string;
  Id: number;
  public loginForm!: FormGroup
  constructor( private router :Router, private formBulider : FormBuilder) { }
ngOnInit(): void {
  this.loginForm = this.formBulider.group({
    email:['', Validators.required],
    password:['', Validators.required]
  })

}
login(data: any){
    console.log('data', data);
    console.log('localstorage.getitem ',localStorage.getItem("key"));
    //var email = document.getElementById("email");
    //var password = document.getElementById("password");
    //console.log("inside the data", email,password);
   
    const  user = JSON.parse (localStorage.getItem("key"))
    const getEmail = localStorage.getItem('email');
    const getpassword = localStorage.getItem('password');
   

    const password = user.password
    const email = user.email
    console.log('inside the data',  user?.email);
    console.log('inside the data.email', data);
    console.log('inside the email', email);
   
   if(data.email === email && data.password === password){
    console.log('user', user);
    alert('sucess')
   this.router.navigate(['/home']);
    }
   else {
      alert('Please enter valid email or password')
    }
}
    
    //var txt;
    //if(confirm("login successfully!")) {
     //txt= "ok move on the next process";
     //this.router.navigate(['/register'])
      //console.log('inside the if condition', txt)
     //}
    //else(confirm('please enter valid email or password!')) 
   //{
      
    // txt = "move to home page";
     //this.router.navigate(['/home'])
      //console.log('inside the else condition', txt)
//}
    //document.getElementById("demo").innerHTML = txt;
   


  //ngOnInit(): void {
   // this.registerForm = this.fb.group({
      //name: ['', Validators.required],
      //email: ['', Validators.required],
      //password: ['', Validators.required],
      //repassword: ['', Validators.required],
   // });
    
  //}
  //login() {  
   // var email = document.getElementById("res1");
    //var password = document.getElementById("res2");
    //console.log("inside the data", email,password);
 // private  fb: FormBuilder 
//}
}
