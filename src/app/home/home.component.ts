import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  showFlage = false;
  arrData : any
 constructor(private dataService : CommonService) {}
 showStyle(){
  
  this.showFlage = true
}
  ngOnInit(): void{
    this.dataService.getMyAllData().subscribe(response => {
     
      this.arrData = response
      console.log('inside the data', this.arrData )
    })
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


