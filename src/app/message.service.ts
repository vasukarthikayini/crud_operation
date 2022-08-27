import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  //public messageSubject = new Subject <string>();
  public messageSubject = new BehaviorSubject<string>('angular');

  constructor() { }
  sendMessage(data) {
    this.messageSubject.next(data);
  }
}
