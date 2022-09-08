import { Component, OnInit, Input, TemplateRef, EventEmitter, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForOf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyValue } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  closeModal: string;
  arrData: [] = [];
  childata: [];
  data: [] = [];
  Id: number;
  description: string;
  price : number;
  discountPercentage :number;
  rating : number;
  stock : number;
  brand : string;
  category: string;
  res: any;  
  title: string;
  formData: FormGroup;
  editData: {};
  updateData: {};
  modalRef: BsModalRef;
  @Input() item: any;
 
  //@Input('arrData') item: {item};
 // @Output() newItemEvent = new EventEmitter<string>();
 
  

  constructor( private modalService: BsModalService,private route: ActivatedRoute,  
    private dataService: CommonService, private router: Router) { 
    this.data = router.getCurrentNavigation().extras?.state?.data;
    console.log('inside the data', this.data);
    }

  ngOnInit(): void {
   }
    openModal(template: TemplateRef<any>,data: any) {

    this.modalRef = this.modalService.show(template);
      //this.title = data.title;
      this.formData.setValue({
        title: data.title,
        id: data.Id,
        description: data.description,
        price: data.price,
        discountPercentage:data.discountPercentage,
        rating:data.rating,
        stock: data.stock 
      });
      }
      onClickSubmit(updatedData: object): void {
        console.log('inside the data', updatedData)
        this.dataService.updateData(updatedData).subscribe(result => {
          console.log('result', result)
    })
        this.modalService.hide();
    }
      
       
   // trackItem(index, item) {
     // return item ? item.id : undefined;

   // }
   //private onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number return -1;
      }
  
   
  
   
    
  


  
 
 //addnewItem() {
  //console.log('inside the  addnewItem')
    //this.newItemEvent.emit('i am from child component');
// }

  
  