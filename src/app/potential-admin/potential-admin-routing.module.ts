import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotentialAdminComponent } from './components/potential-admin/potential-admin.component';

const routes: Routes = [
  {
    path: '',
    component: PotentialAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotentialAdminRoutingModule {}
