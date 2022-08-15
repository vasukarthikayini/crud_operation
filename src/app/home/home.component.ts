import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrData : any

  constructor(private dataService : CommonService) { }

  ngOnInit(): void {
    this.dataService.getMyAllData().subscribe(response => {
      console.log('inside the data', response)
      this.arrData = response
    }
      )
    
    }
  }


