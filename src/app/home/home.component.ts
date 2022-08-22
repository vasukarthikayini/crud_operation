import { Component, OnInit, TemplateRef } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { CommonService } from '../common.service';
import { FormControl, FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
//import { mbdModalRef } from 'ndb-angular-ui-kit/model,';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showFlag = false;
  arrData: any;
  editData: {};
  updateData: {};
  modalRef: BsModalRef;
  title: string;
  currentItem: 'hello world';

  formData: FormGroup;
  id = new FormControl('');
  constructor(
    private dataService: CommonService,
    private modalService: BsModalService,
    private route: Router
  ) {}

  //openModalnew(template: TemplateRef<any>) {
    //this.modalRef = this.modalService.show(template);
    //console.log(this.modalRef);
  //}
  showStyle() {
    this.showFlag = true;
  }
  ngOnInit(): void {
    this.dataService.getMyAllData().subscribe((Response) => {
      this.arrData = Response;
    });
    localStorage.setItem('SeesionUser', 'karthikayini');

    this.formData = new FormGroup({
      title: new FormControl(''),
      id: new FormControl(),
    });
    //this.getValues();
  }
  openModal(Template: TemplateRef<any>, data: any) {
    this.title = data.title;
    this.formData.setValue({
      title: data.title,
      id: data.Id,
    });
    this.modalRef = this.modalService.show(Template);
  }
  onclickSubmit(updatedData: object): void {
    console.log('inside the data',this.updateData)
    this.dataService.updateData(this.updateData).subscribe((result) => {
      console.log('result.>', result);
    });
    this.modalService.hide();
  }
  addItem(data: any) {
    console.log('data come from the child component', data);
  }
  deletemodal(data: any): void {

    this.modalRef = this.modalService.show(data);
  }
  deleteData(): void {

  }
   // this.route.navigate(['/register'], { queryParams: { serviceId: 22 } });
    //this.route.navigateByUrl('/register-page', { state: { hello: 'world' } });
  
  editnewData(data) {
    this.formData.setValue({
      title: data.title,
      id: data.id,
    });
  
  }
  
}
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
