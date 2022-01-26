import { Component, TemplateRef } from '@angular/core';
import {
  NbDialogService,
  NbSortDirection,
  NbSortRequest,
  NbTreeGridDataSource,
  NbTreeGridDataSourceBuilder
} from '@nebular/theme';

import { Customer } from './../../modules/models/customer.model';
import { CustomerEditDialogComponent } from './../customer-edit-dialog/customer-edit-dialog.component';
import { FormGroup } from '@angular/forms';
import { TNode } from './../../modules/models/node.model';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent {
  form!: FormGroup;

  customColumn = 'actions';
  defaultColumns = ['name', 'contact', 'address'];
  allColumns = [...this.defaultColumns, this.customColumn];

  dataSource: NbTreeGridDataSource<Customer>;

  sortColumn!: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(
    private dialogService: NbDialogService,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<Customer>
  ) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TNode<Customer>[] = [
    {
      data: { name: 'Projects', contact: '1.8 MB', address: '5' }
    }
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + nextColumnStep * index;
  }

  addCustomer() {
    this.data.push({
      data: { name: 'Projects', contact: '1.8 MB', address: '5' }
    });
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  open() {
    this.dialogService
      .open(CustomerEditDialogComponent, {
        context: {
          title: 'This is a title passed to the dialog component'
        }
      })
      .onClose.subscribe(form => (this.form = form));
  }

  deleteCustomer(dialog: TemplateRef<any>, index: any) {
    this.dialogService
      .open(dialog, {
        context: 'Are you sure you want to delete this?'
      })
      .onClose.subscribe(async res => {
        if (res) {
          this.data.splice(this.data.indexOf(index), 1);
          this.dataSource = this.dataSourceBuilder.create(this.data);
        }
      });
  }
}
