import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './utils/constant';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class CommonService { 
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getMyAllData() {
    return this.http.get(BASE_URL);
  }

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
    

    return this.http.put(`${BASE_URL}/${data.id}`, body)
  }
  deleteData()(data: any): {
    return this.http.delete(`${BASE_URL}/${data.id}`);
  }

}


 
