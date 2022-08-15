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
  password: string;
  repassword: string;
  storeName(){
    localStorage.setItem(this.key, 'angular');
   
  }
}
