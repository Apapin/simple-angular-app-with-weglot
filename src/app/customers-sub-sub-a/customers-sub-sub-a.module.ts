import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersSubSubARoutingModule } from './customers-sub-sub-a-routing.module';
import { CustomersSubSubAComponent } from './customers-sub-sub-a.component';


@NgModule({
  declarations: [
    CustomersSubSubAComponent
  ],
  imports: [
    CommonModule,
    CustomersSubSubARoutingModule
  ]
})
export class CustomersSubSubAModule { }
