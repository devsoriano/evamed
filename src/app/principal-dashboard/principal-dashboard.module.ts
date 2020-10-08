import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalDashboardRoutingModule } from './principal-dashboard-routing.module';
import { PrincipalDashboardComponent } from './components/principal-dashboard/principal-dashboard.component';
import { MaterialModule } from './../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PrincipalDashboardComponent
  ],
  imports: [
    CommonModule,
    PrincipalDashboardRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule
  ]
})
export class PrincipalDashboardModule { }
