import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersSubARoutingModule } from './customers-sub-a-routing.module';
import { CustomersSubAComponent } from './customers-sub-a.component';


@NgModule({
  declarations: [
    CustomersSubAComponent
  ],
  imports: [
    CommonModule,
    CustomersSubARoutingModule
  ]
})
export class CustomersSubAModule { }
