import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from '../customer/customer.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    loadChildren: () =>
      import('../customer/customer.module').then(m => m.CustomerModule)
  },
  { path: '', redirectTo: 'customer', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
