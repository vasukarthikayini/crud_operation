import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthguardService } from './authguard.service';
import { AuthenticationGuard } from './authentication.guard';
import { PopupComponent } from './popup/popup.component';
import { MainComponent } from './main/main.component';





const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
  {
    path: 'primary',
    component: MainComponent
  },
  {
    path: "user",
    loadChildren: () => import("./user/user.module").then (m => m.UserModule)
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
