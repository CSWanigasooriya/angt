import { FormControl, FormGroup } from '@angular/forms';

import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-customer-edit-dialog',
  templateUrl: './customer-edit-dialog.component.html',
  styleUrls: ['./customer-edit-dialog.component.scss']
})
export class CustomerEditDialogComponent {
  title: string = 'Edit Customer';
  form = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private ref: NbDialogRef<CustomerEditDialogComponent>) {}

  close() {
    this.ref.close(this.form);
  }

  onSubmit() {}
}
