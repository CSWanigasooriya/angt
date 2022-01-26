import Dexie, { Table } from 'dexie';

import { Customer } from './../modules/models/customer.model';

// db.ts

export class AppDB extends Dexie {
  customers!: Table<Customer, number>;

  constructor() {
    super('angT');
    this.version(3).stores({
      customers: ' name, contact, address'
    });
  }
}

export const db = new AppDB();
