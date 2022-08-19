import { Component, OnInit, TemplateRef  } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonService } from '../common.service';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
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
  updateData : {};
  modalRef: BsModalRef;
  title: string;

  formData: FormGroup;
  id = new FormControl('');
 constructor(private dataService : CommonService,private modalService: BsModalService ) { }

  
  openModalnew(template: TemplateRef<any>  ) {
     this.modalRef = this.modalService.show(template);
    console.log(this.modalRef)
}


 showStyle(){
  
  this.showFlag = true
}
  ngOnInit(): void{
    this.dataService.getMyAllData().subscribe(Response=> {
      this.arrData = Response
    })
    this.formData  = new FormGroup({
      title: new FormControl(''),
      id: new FormControl(),
    });
    //this.getValues(); 
  }

   
    
  openModal(Template: TemplateRef<any>, data:any) {
      this.title = data.title;
      this.formData.setValue({
        title: data.Title,
        id: data.Id
      });
      this.modalRef = this.modalService.show(Template);
    
      } 
  OnClickSubmit(updateData: Object): void {
     console.log('inside the data',  updateData )
      this.dataService.updateData( updateData ).subscribe(result=> {
       console.log('result.>', result)
      })
      this.modalService.hide()
    }  }
   // deletemodal: void {

    //}


    

    
  
  
     //getValues(){
     //this.dataService.getMyAllData().subscribe({
     // next: (res) => {
       // this.arrData = res;
        //console.log(this.arrData);
      //}
    //});
    //}
 


    //console.log('data Value', Data)
    //this.editData = Data


    
  

  

 

 
    //this.dataService.getMyAllData().subscribe(response => {
      //console.log('inside the data', response)
      //this.arrData = response
    //})
      //showStyle(){
        //console.log("check", this.value);
//arrData : any
      //}
    

  //}


