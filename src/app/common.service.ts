import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL = "https://reqres.in/api/products"

  constructor(private http: HttpClient) {

   }
   ngOnInit() {

   }
   getMyAllData() {
    return this.http.get(this.baseURL);
   }
}
