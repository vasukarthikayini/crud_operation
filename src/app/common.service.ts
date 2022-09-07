import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BASE_URL } from './utils/constant';

import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeModule } from './home/home.module';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  posts: any;
  requests: any;

  constructor(private http: HttpClient) {}

  getMyAllData(): Observable<any> {
    //this.http.getRequest().subscribe((res:any[]) => this.requests = res);
    return this.http.get(BASE_URL);
  }
 getcommentsbyparameter(): Observable<any> {
    let arrData1 = new HttpParams().set('id', "1")
    return this.http.get(BASE_URL, {params: arrData1});
 }
  //postData(preveresdata:HomeModule): Observable<any> {
   // return this.http.post(BASE_URL, preveresdata);
//}

  updateData(data: any) {
    const body = {
      method: 'PUT',
      body: JSON.stringify({
        id: 1,
        title: data.title,
        body: data.title,
        userId: data.id,
        
       }),
      headers: {
        'content-type': 'application/json; charset=UTF-8',
      },
    };
    return this.http.put(`${BASE_URL}/${data.id}`, body);
  }
  deleteData(data: any) {
    console.log('delete the data', data )
    return this.http.delete(`${BASE_URL}/${data.id}`);
    //deleteData(data: any): {
    //return this.http.delete(`${BASE_URL}/${data.id}`, body)
    //}
  }
 

  
  
  }


