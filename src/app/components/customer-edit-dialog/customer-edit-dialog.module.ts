import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbButton,
  NbButtonModule,
  NbCardModule,
  NbInputModule
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { CustomerEditDialogComponent } from './customer-edit-dialog.component';
import { CustomerEditDialogRoutingModule } from './customer-edit-dialog-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CustomerEditDialogComponent],
  imports: [
    NbCardModule,
    CommonModule,
    CustomerEditDialogRoutingModule,
    NbCardModule,
    NbButtonModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbButtonModule
  ],
  exports: [CustomerEditDialogComponent]
})
export class CustomerEditDialogModule {}
