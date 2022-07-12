import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnergyAdminComponent } from './components/energy-admin/energy-admin.component';
import { UpdateEnergyComponent } from './components/update-energy/update-energy.component';

const routes: Routes = [
  {
    path: '',
    component: EnergyAdminComponent,
  },
  {
    path: 'update/:id',
    component: UpdateEnergyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergyAdminRoutingModule {}
