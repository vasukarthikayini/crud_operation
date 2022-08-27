import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AuthguardService } from './authguard.service';
import { HeadersInterceptor } from './headers.interceptor';
import { Router } from '@angular/router';
//import { UserComponent } from './user/user/user.component';
import { MessageService } from './message.service';
import { MessageBoardComponent } from './message-board/message-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardComponent,
    MainComponent,
    NotFoundPageComponent,
    MessageBoardComponent,
    //UserComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,HttpClientModule,
    FormsModule,
    ModalModule,
    BrowserAnimationsModule
   ],
  providers: [BsModalService,
    MessageService,  
    AuthguardService, 
     {
     provide: HTTP_INTERCEPTORS, 
     useClass: HeadersInterceptor,
      multi: true
    }
  

],
  bootstrap: [AppComponent]
})
export class AppModule { }
