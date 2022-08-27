import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from '../user/user/user.component';
import { Routes, RouterModule } from '@angular/router';
const Userroutes : Routes = [
  {
    path: 'user',
    component: UserComponent
    //Childern: [
      //path: "home",
      //Component: AddEdit UserComponent
    //]
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
