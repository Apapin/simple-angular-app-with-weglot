import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersSubSubAComponent } from './customers-sub-sub-a.component';

const routes: Routes = [{ path: '', component: CustomersSubSubAComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersSubSubARoutingModule { }
