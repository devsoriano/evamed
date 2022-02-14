import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnergyAdminRoutingModule } from './energy-admin-routing.module';
import { EnergyAdminComponent } from './components/energy-admin/energy-admin.component';
import { AddEnergyComponent } from './components/add-energy/add-energy.component';
import { DeleteEnergyComponent } from './components/delete-energy/delete-energy.component';
import { UpdateEnergyComponent } from './components/update-energy/update-energy.component';
import { AddPotentialEnergyComponent } from './components/potential/add-potential-energy/add-potential-energy.component';
import { DeletePotentialEnergyComponent } from './components/potential/delete-potential-energy/delete-potential-energy.component';
import { UpdatePotentialEnergyComponent } from './components/potential/update-potential-energy/update-potential-energy.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    EnergyAdminComponent,
    AddEnergyComponent,
    DeleteEnergyComponent,
    UpdateEnergyComponent,
    AddPotentialEnergyComponent,
    DeletePotentialEnergyComponent,
    UpdatePotentialEnergyComponent,
  ],
  imports: [
    CommonModule,
    EnergyAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [
    EnergyAdminComponent,
    AddEnergyComponent,
    DeleteEnergyComponent,
    UpdateEnergyComponent,
    AddPotentialEnergyComponent,
    DeletePotentialEnergyComponent,
    UpdatePotentialEnergyComponent,
  ],
  entryComponents: [
    AddEnergyComponent,
    DeleteEnergyComponent,
    AddPotentialEnergyComponent,
    DeletePotentialEnergyComponent,
    UpdatePotentialEnergyComponent,
  ],
})
export class EnergyAdminModule {}
