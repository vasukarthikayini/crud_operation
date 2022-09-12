import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForOf } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { KeyValue } from '@angular/common';
//import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
declare var window: any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {


  closeResult: string = '';

  closeModal: string;
  arrData: [] = [];
  childata: [];
  data: [] = [];
  Id: number;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  res: any;
  title: string;
  formData: FormGroup;
  editData: {};
  updateData: {};
  modalRef: BsModalRef;
  @Input() item: any;
  formModal: any;
 

  
  //@Input('arrData') item: {item};
  // @Output() newItemEvent = new EventEmitter<string>();


  constructor(
    private modalService: BsModalService, 
    private route: ActivatedRoute,
    private dataService: CommonService,
    private router: Router,
  
   
    
  ) {
    this.data = router.getCurrentNavigation().extras?.state?.data;
    console.log('inside the data', this.data);
  }

  ngOnInit(): void { 
    
  }
  
  openModal(template: TemplateRef<any>, data: any) {
    //this.toast.success({detail:"success message", summary:result.message,duration:5000})
  
    this.modalRef = this.modalService.show(template);
    console.log('inside the value', data);
    //this.title = data.title;
    // this.formData.setValue({
    // title: data.title,
    // id: data.id,
    // description: data.description,
    // price: data.price,
    // discountPercentage:data.discountPercentage,
    // rating:data.rating,
    // stock: data.stock
    //  });
    }
      
    openFormModal(data) {
      //this.formModal.show(data);
      this.router.navigate(["popup"])
     
    }
    onClickSubmit(updatedData: object): void {
    console.log('inside the data', updatedData);
    this.dataService.updateData(updatedData).subscribe((result) => {
    console.log('result', result);
    });
    this.modalService.hide();
    }
    closeExit(){
      this.modalService.hide();

    }
     

 
    }