import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForOf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  arrData: [] = [];
  childata: [];
  data: [] = [];
  Id: number;
  res: any;  
  title: string;
  formData: FormGroup;
  editData: {};
  updateData: {};
  modalRef: BsModalRef;
  @Input() item: any;
  //@Input('arrData') item: {item};
 // @Output() newItemEvent = new EventEmitter<string>();
  

  constructor( private modalService: BsModalService, private route: ActivatedRoute,  
    private dataService: CommonService, private router: Router) { 
    this.data = router.getCurrentNavigation().extras?.state?.data;
    console.log('inside the data', this.data);
    }

  ngOnInit(): void {
    this.extraData() 
  //this.arrData = [];
    //console.log ('inside the data', this.item)
     //console.log(this.router.getCurrentNavigation()
    }
    extraData(){
      (res)  => { 
        this.data = res;
      }
      
    }
  }

  
 
 //addnewItem() {
  //console.log('inside the  addnewItem')
    //this.newItemEvent.emit('i am from child component');
// }

  
  //editnewData(data) {
   //this.formData.setValue({
     // title: data.title,
      //id: data.id,
    //});
  //}
  //deletemodal(data: any): void {
    //this.updateData = data
   // console.log('delete data', data)
    //this.modalRef = this.modalService.show(data);
  //}
 //deleteData(): void {
    //this.dataService.deleteData(this.updateData).subscribe((result) => {
     // console.log('result.>', result);
//});

  //}
  //onclickSubmit(updateData: object) {
   // console.log('request data', updateData)
    //this.dataService.updateData(updateData)
    //.subscribe({
    //  next:(data) => {
        //this.router.navigate(["/home"])
    //  },
     // error: (err) => {
      //  console.log(err)
     // }
   // })
    
 // }
  

 
