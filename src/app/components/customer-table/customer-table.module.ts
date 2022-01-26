import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbTableModule,
  NbTreeGridModule
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { CustomerEditDialogModule } from './../customer-edit-dialog/customer-edit-dialog.module';
import { CustomerTableComponent } from './customer-table.component';
import { CustomerTableRoutingModule } from './customer-table-routing.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CustomerTableComponent],
  imports: [
    CommonModule,
    CustomerTableRoutingModule,
    NbTreeGridModule,
    NbTableModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbCardModule,
    FormsModule,
    CustomerEditDialogModule
  ],
  exports: [CustomerTableComponent]
})
export class CustomerTableModule {}
