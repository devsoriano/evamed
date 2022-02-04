import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsAdminRoutingModule } from './materials-admin-routing.module';
import { MaterialsAdminComponent } from './components/materials-admin/materials-admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AddMaterialComponent } from './components/add-material/add-material.component';
import { UpdateMaterialComponent } from './components/update-material/update-material.component';
import { UpdateSchemeComponent } from './components/update-scheme/update-scheme.component';

@NgModule({
  declarations: [MaterialsAdminComponent, AddMaterialComponent, UpdateMaterialComponent, UpdateSchemeComponent],
  imports: [
    CommonModule,
    MaterialsAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class MaterialsAdminModule {}
