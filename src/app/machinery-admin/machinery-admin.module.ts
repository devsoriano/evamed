import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MachineryAdminRoutingModule } from './machinery-admin-routing.module';
import { MachineryAdminComponent } from './components/machinery-admin/machinery-admin.component';
import { AddMachineryComponent } from './components/add-machinery/add-machinery.component';
import { UpdateMachineryComponent } from './components/update-machinery/update-machinery.component';
import { DeleteMachineryComponent } from './components/delete-machinery/delete-machinery.component';
import { UpdatePotentialMachineryComponent } from './components/potential/update-potential-machinery/update-potential-machinery.component';
import { AddPotentialMachineryComponent } from './components/potential/add-potential-machinery/add-potential-machinery.component';
import { DeletePotentialMachineryComponent } from './components/potential/delete-potential-machinery/delete-potential-machinery.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    MachineryAdminComponent,
    AddMachineryComponent,
    UpdateMachineryComponent,
    DeleteMachineryComponent,
    UpdatePotentialMachineryComponent,
    AddPotentialMachineryComponent,
    DeletePotentialMachineryComponent,
  ],
  imports: [
    CommonModule,
    MachineryAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [
    MachineryAdminComponent,
    AddMachineryComponent,
    UpdateMachineryComponent,
    DeleteMachineryComponent,
    UpdatePotentialMachineryComponent,
    AddPotentialMachineryComponent,
    DeletePotentialMachineryComponent,
  ],
  entryComponents: [
    AddMachineryComponent,
    DeleteMachineryComponent,
    UpdatePotentialMachineryComponent,
    AddPotentialMachineryComponent,
    DeletePotentialMachineryComponent,
  ],
})
export class MachineryAdminModule {}
