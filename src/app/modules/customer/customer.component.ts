import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Customer } from './../models/customer.model';
import { db } from './../../core/db';
import { liveQuery } from 'dexie';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerComponent {
  customers$ = liveQuery(() => db.customers.toArray());
  customerName = 'Customer Name';

  async addNewCustomer() {
    await db.customers.add({
      name: this.customerName,
      contact: '',
      address: ''
    });
  }

  identifyList(index: number, customer: Customer) {
    return `${customer.name}${customer.contact}${customer.address}`;
  }
}
