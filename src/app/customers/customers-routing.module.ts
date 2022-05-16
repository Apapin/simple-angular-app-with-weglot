import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: '', loadChildren: () => import('../customers-sub-a/customers-sub-a.module').then(m => m.CustomersSubAModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
