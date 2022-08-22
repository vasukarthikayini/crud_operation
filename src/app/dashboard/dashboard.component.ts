import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() item= '';
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    console.log ('inside the item', 'Hello World')
    this.addnewItem()
  }
 addnewItem() {
  console.log('inside the  addnewItem')
    this.newItemEvent.emit('i am from child component');
  }

}
