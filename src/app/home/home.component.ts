import { Component, OnInit, TemplateRef } from '@angular/core';
import { Data, TitleStrategy } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonService } from '../common.service';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
//import { mbdModalRef } from 'ndb-angular-ui-kit/model,';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router ,ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PaginatePipe } from 'ngx-pagination';
import { take } from 'rxjs';
import { HomeModule } from './home.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showFlag = false;
  filterTerm!: string;
  title: string;
  item: '';
  arrData: [] = [];
  raja: any;
  data: any;
  editData: {};
  updateData: {};
  childdata: any;
  Id: number;
  description: string;
  price : number;
  discountPercentage :number;
  rating : number;
  stock : number;
  brand : string;
  category: string;
  modalRef: BsModalRef;
  currentItem: 'hello world';
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  formData: FormGroup;
  requests: any;

  id = new FormControl('');
  
  constructor(
    private dataService: CommonService,
    private modalService: BsModalService,
    private message: MessageService,
    private router:Router,
    private route: ActivatedRoute,
   ) {}

  //openModalnew(template: TemplateRef<any>) {
  //this.modalRef = this.modalService.show(template);
  //console.log(this.modalRef);
  //}
  

  ngOnInit(): void {
    
    this.dataService.getMyAllData().subscribe((Response) => {
      console.log('api data', Response);
      this.arrData = Response.products;
    });
    this.dataService.getcommentsbyparameter().subscribe(data => {
   // console.log('arr data', data);
    this.arrData = data.products;
    //console.log('data products', data.products);
    })
   
    localStorage.setItem('SeesionUser', 'karthikayini');

    this.formData = new FormGroup({
      title: new FormControl(''),
      id: new FormControl(),
    });
 
//this.getValues();
}
  showStyle(item) {
   
  // console.log('inside the data', item);
   this.router.navigate(['/dashboard'], {
    state:{
      data: item
    }
  });
   
    
   // this.route.navigate(['/register'], { queryParams: { serviceId: 22 } });
    
  }
  openModal(Template: TemplateRef<any>, data: any) {
    this.title = data.title;
    this.formData.setValue({
      title: data.title,
      id: data.Id,
      });
      
    this.modalRef = this.modalService.show(Template);
   
  }
 
  onclickSubmit(updateData: object) {
    console.log('request data', updateData)
    this.dataService.updateData(updateData)
    .subscribe({
      next:(data) => {
        //this.router.navigate(["/home"])
      },
      error: (err) => {
        console.log(err)
      }
    })
    
  }

  deletemodal(data: any): void {
    this.updateData = data
    console.log('delete data', data)
    //this.modalRef = this.modalService.show(data);
  }
  deleteData(): void {
    this.dataService.deleteData(this.updateData).subscribe((result) => {
      console.log('result.>', result);

      //this.dataService.updateData()
    });

  }
  // this.route.navigate(['/register'], { queryParams: { serviceId: 22 } });
  //this.route.navigateByUrl('/register-page', { state: { hello: 'world' } });

 
  sendMessage(data){
    this.message.sendMessage(data.value)
  }
  onTableDataChanges(event: any) {
    this.page = event;
    //this.arrData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    //this.arrData();
  }
  
  
}
