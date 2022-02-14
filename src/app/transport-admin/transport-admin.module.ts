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

@NgModule({
  declarations: [
    TransportAdminComponent,
    AddTransportComponent,
    UpdateTransportComponent,
    DeleteTransportComponent,
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
  ],
  entryComponents: [AddTransportComponent, DeleteTransportComponent],
})
export class TransportAdminModule {}
