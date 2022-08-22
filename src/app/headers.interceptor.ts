import { Injectable } from '@angular/core';
import { 
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  
} from '@angular/common/http';
import { Router, RouterModule, Routes} from '@angular/router';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}
  

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('inside the interceptor')
    const token = localStorage.getItem('SeesionUser')
    if(!token){
      localStorage.clear()
      this.router.navigate(['/login'])
    }
    else {
      request = request.clone({
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
          'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
          'Authorization': `${token}`
        }
    })
    }
    return next.handle(request);

    }
   // const apiKey = 'user'
     
  }
