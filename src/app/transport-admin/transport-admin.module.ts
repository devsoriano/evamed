import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransportAdminRoutingModule } from './transport-admin-routing.module';
import { TransportAdminComponent } from './components/transport-admin/transport-admin.component';
import { AddTransportComponent } from './components/add-transport/add-transport.component';
import { UpdateTransportComponent } from './components/update-transport/update-transport.component';
import { DeleteTransportComponent } from './components/delete-transport/delete-transport.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';
import { AddPotentialTransportComponent } from './components/potential/add-potential-transport/add-potential-transport.component';
import { DeletePotentialTransportComponent } from './components/potential/delete-potential-transport/delete-potential-transport.component';
import { UpdatePotentialTransportComponent } from './components/potential/update-potential-transport/update-potential-transport.component';

@NgModule({
  declarations: [
    TransportAdminComponent,
    AddTransportComponent,
    UpdateTransportComponent,
    DeleteTransportComponent,
    AddPotentialTransportComponent,
    DeletePotentialTransportComponent,
    UpdatePotentialTransportComponent,
  ],
  imports: [
    CommonModule,
    TransportAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [
    TransportAdminComponent,
    AddTransportComponent,
    UpdateTransportComponent,
    DeleteTransportComponent,
    AddPotentialTransportComponent,
    DeletePotentialTransportComponent,
    UpdatePotentialTransportComponent,
  ],
  entryComponents: [
    AddTransportComponent,
    DeleteTransportComponent,
    AddPotentialTransportComponent,
    DeletePotentialTransportComponent,
    UpdatePotentialTransportComponent,
  ],
})
export class TransportAdminModule {}
