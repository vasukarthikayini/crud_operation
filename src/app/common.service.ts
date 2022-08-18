import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './utils/constant'
@Injectable({
  providedIn: 'root'
})
export class CommonService {


  constructor(private http: HttpClient) {

   } 
   
   ngOnInit() {

   }
   getMyAllData() {
    return this.http.get(BASE_URL)
   } 
   
  }
