import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsAdminRoutingModule } from './units-admin-routing.module';
import { UnitsAdminComponent } from './components/units-admin/units-admin.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AddUnitComponent } from './components/add-unit/add-unit.component';
import { UpdateUnitComponent } from './components/update-unit/update-unit.component';
import { DeleteUnitComponent } from './components/delete-unit/delete-unit.component';

@NgModule({
  declarations: [
    UnitsAdminComponent,
    AddUnitComponent,
    UpdateUnitComponent,
    DeleteUnitComponent,
  ],
  imports: [
    CommonModule,
    UnitsAdminRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports: [
    UnitsAdminComponent,
    AddUnitComponent,
    UpdateUnitComponent,
    DeleteUnitComponent,
  ],
  entryComponents: [AddUnitComponent, UpdateUnitComponent, DeleteUnitComponent],
})
export class UnitsAdminModule {}
