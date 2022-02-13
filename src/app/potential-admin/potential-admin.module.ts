import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PotentialAdminRoutingModule } from './potential-admin-routing.module';
import { PotentialAdminComponent } from './components/potential-admin/potential-admin.component';
import { AddPotentialComponent } from './components/add-potential/add-potential.component';
import { UpdatePotentialComponent } from './components/update-potential/update-potential.component';
import { DeletePotentialComponent } from './components/delete-potential/delete-potential.component';


@NgModule({
  declarations: [PotentialAdminComponent, AddPotentialComponent, UpdatePotentialComponent, DeletePotentialComponent],
  imports: [
    CommonModule,
    PotentialAdminRoutingModule
  ]
})
export class PotentialAdminModule { }
