import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsAdminRoutingModule } from './materials-admin-routing.module';
import { MaterialsAdminComponent } from './components/materials-admin/materials-admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { UpdateMaterialComponent } from './components/update-material/update-material.component';
import { ChartsModule } from 'ng2-charts';
import { UpdateDataSchemeComponent } from './components/update-data-scheme/update-data-scheme.component';
import { AddDataSchemeComponent } from './components/add-data-scheme/add-data-scheme.component';

@NgModule({
  declarations: [
    MaterialsAdminComponent,
    AddMaterialComponent,
    UpdateMaterialComponent,
    UpdateDataSchemeComponent,
    AddDataSchemeComponent,
  ],
  imports: [
    CommonModule,
    MaterialsAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ChartsModule,
  ],
  exports: [
    MaterialsAdminComponent,
    AddMaterialComponent,
    UpdateMaterialComponent,
    UpdateDataSchemeComponent,
    AddDataSchemeComponent,
  ],
  entryComponents: [UpdateDataSchemeComponent, AddDataSchemeComponent],
})
export class MaterialsAdminModule {}