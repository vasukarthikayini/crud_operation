import { Component, OnInit, TemplateRef  } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonService } from '../common.service';
import { FormsModule } from '@angular/forms';
//import { mbdModalRef } from 'ndb-angular-ui-kit/model,';
import { BsModalRef, BsModalService  } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  showFlag = false;
  arrData : any;
  editData: {};
  modalRef: BsModalRef
 constructor(private dataService : CommonService,private modalService: BsModalService ) {}
 
 openModalnew(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
  this.modalRef.hide();  
  console.log(this.modalRef)
}

 
 
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
    })
    
    
  }
  openModal(Data): void {
    console.log('data Value', Data)
    this.editData = Data
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


