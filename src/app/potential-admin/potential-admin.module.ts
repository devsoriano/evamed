import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialAdminRoutingModule } from './potential-admin-routing.module';
import { PotentialAdminComponent } from './components/potential-admin/potential-admin.component';
import { AddPotentialComponent } from './components/add-potential/add-potential.component';
import { UpdatePotentialComponent } from './components/update-potential/update-potential.component';
import { DeletePotentialComponent } from './components/delete-potential/delete-potential.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    PotentialAdminComponent,
    AddPotentialComponent,
    UpdatePotentialComponent,
    DeletePotentialComponent,
  ],
  imports: [
    CommonModule,
    PotentialAdminRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports: [
    PotentialAdminComponent,
    AddPotentialComponent,
    UpdatePotentialComponent,
    DeletePotentialComponent,
  ],
  entryComponents: [
    AddPotentialComponent,
    UpdatePotentialComponent,
    DeletePotentialComponent,
  ],
})
export class PotentialAdminModule {}
