import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple';
  key: string = 'name'
  email: string;
  

 storeName(){
    localStorage.setItem(this.key, 'angular');
   // if(data.email === localStorage.getItem('email') && data.password === localStorage.getItem('password')){
     // }else {
       // alert('Please enter valid email or password')
     // }
    
  }  
}
