import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})
export class MessageBoardComponent implements OnInit {
 // Message:string;

  constructor(private MessageService: MessageService) { }

  ngOnInit(): void {
    //this.MessageService.messageSubject.subscribe (data => {
     // this.Message = data;
    //})
  }

}
