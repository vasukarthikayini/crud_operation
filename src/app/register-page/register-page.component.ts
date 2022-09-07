import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  
 
  
  exform: FormGroup;
  constructor(private router:Router, private  ActivatedRoute: ActivatedRoute) {
    const data = this.router.getCurrentNavigation()?.extras?.state?.['hello']
    console.log('inside the data', data);
     
  }
   ngOnInit() {
    this.ActivatedRoute
    .queryParams
    .subscribe(params => {
      console.log('inside the data', params)
      
    });
  
  this.exform = new FormGroup({
    'name' : new FormControl(null, Validators.required),
    'email' : new FormControl(null, [Validators.required, Validators.email]),
    'password' : new FormControl(
      '',
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    //'Password' : new FormControl(null, [Validators.required, Validators.minLength(10)])
    
  });
  //'repate-password' ; new FormControl (
    //'',
   // [
      //Validators.required,
      //Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
    //]),
  //'repate-password' ; new FormControl(null, [Validators.required, Validators.minLength(10)])
  }

  clicksub() {
    console.log("checkin",this.exform.value);
    let data = { email:localStorage, password: localStorage}
    localStorage.setItem( "key", JSON.stringify (this.exform.value))
    this.router.navigate(['/login']);
  }
    //var clicksub =JSON.parse(localStorage.getItem('form'));
    
  
  
     // if(data.email === localStorage.getItem('email') && data.password === localStorage.getItem('password')){
       // }else {
          // alert('Please enter valid email or password')
        // }
  //this.exform.reset()

  
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get password() {
    //if(data.email === localStorage.getItem('email') && data.password === localStorage.getItem('password')){
    //}else {
      //alert('Please enter valid email or password')
    //}
   
    return this.exform.get('password');
  }
  //get repatepassword() {
   // return this.exform.get('repate-password');
  //}
 

}

 