import { Component, OnInit, TemplateRef } from '@angular/core';
import {ModalDismissReasons, NgbModal,  NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {
  closeResult: string = '';
  constructor(private ModalService: NgbModal) { }
 

  open(content:any) {
    this.ModalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      alert(result.message)
     
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
     
    });
  } 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
