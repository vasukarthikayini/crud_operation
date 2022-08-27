import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from'@angular/material/table';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxPaginationModule 
   ],
   exports: [CommonModule, NgxPaginationModule],
 
})
export class HomeModule { }
