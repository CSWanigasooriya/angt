import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbUserModule
} from '@nebular/theme';

import { CommonModule } from '@angular/common';
import { CustomerModule } from './../customer/customer.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CustomerModule,
    NbSidebarModule,
    NbLayoutModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbActionsModule,
    NbAccordionModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
