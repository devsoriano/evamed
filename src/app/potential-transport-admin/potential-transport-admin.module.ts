import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialTransportAdminRoutingModule } from './potential-transport-admin-routing.module';
import { PotentialTransportComponent } from './components/potential-transport/potential-transport.component';
import { AddPotentialTransportComponent } from './components/add-potential-transport/add-potential-transport.component';
import { UpdatePotentialTransportComponent } from './components/update-potential-transport/update-potential-transport.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PotentialTransportComponent,
    AddPotentialTransportComponent,
    UpdatePotentialTransportComponent,
  ],
  imports: [
    CommonModule,
    PotentialTransportAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class PotentialTransportAdminModule {}
