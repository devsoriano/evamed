import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipalAdminRoutingModule } from './principal-admin-routing.module';
import { PrincipalAdminComponent } from './components/principal-admin/principal-admin.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [PrincipalAdminComponent],
  imports: [
    CommonModule,
    PrincipalAdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class PrincipalAdminModule {}
