import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersSubAComponent } from './customers-sub-a.component';

const routes: Routes = [
  { path: 'customers/aaa', component: CustomersSubAComponent },   
  { path: 'customers/aaa/a', loadChildren: () => import('../customers-sub-sub-a/customers-sub-sub-a.module').then(m => m.CustomersSubSubAModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersSubARoutingModule { }
