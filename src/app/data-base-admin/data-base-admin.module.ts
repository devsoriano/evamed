import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataBaseAdminRoutingModule } from './data-base-admin-routing.module';
import { DataBaseAdminComponent } from './components/data-base-admin/data-base-admin.component';
import { AddDataBaseComponent } from './components/add-data-base/add-data-base.component';
import { UpdateDataBaseComponent } from './components/update-data-base/update-data-base.component';
import { DeleteDataBaseComponent } from './components/delete-data-base/delete-data-base.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DataBaseAdminComponent,
    AddDataBaseComponent,
    UpdateDataBaseComponent,
    DeleteDataBaseComponent,
  ],
  imports: [
    CommonModule,
    DataBaseAdminRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
  ],
  exports: [
    DataBaseAdminComponent,
    AddDataBaseComponent,
    UpdateDataBaseComponent,
    DeleteDataBaseComponent,
  ],
  entryComponents: [
    AddDataBaseComponent,
    UpdateDataBaseComponent,
    DeleteDataBaseComponent,
  ],
})
export class DataBaseAdminModule {}
