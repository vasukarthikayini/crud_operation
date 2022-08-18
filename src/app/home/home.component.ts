import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  showFlag = false;
  arrData : any;
 constructor(private dataService : CommonService) {}
 showStyle(){
  
  this.showFlag = true
}
  ngOnInit(): void{
    this.getValues(); 
    
      
     }
     getValues(){
     this.dataService.getMyAllData().subscribe({
      next: (res) => {
        this.arrData = res;
        console.log(this.arrData);
      }
    });
  }
  
    }
  
    
  

  

 

 
    //this.dataService.getMyAllData().subscribe(response => {
      //console.log('inside the data', response)
      //this.arrData = response
    //})
      //showStyle(){
        //console.log("check", this.value);
//arrData : any
      //}
    

  //}


