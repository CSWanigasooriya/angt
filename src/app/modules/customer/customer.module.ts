import {
  NbButtonModule,
  NbIconModule,
  NbInputModule,
  NbTableModule,
  NbTreeGridModule
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerTableModule } from './../../components/customer-table/customer-table.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NbTreeGridModule,
    NbTableModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    FormsModule,
    CustomerTableModule
  ],
  exports: [CustomerComponent]
})
export class CustomerModule {}
