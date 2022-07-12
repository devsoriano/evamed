import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnitsAdminComponent } from './components/units-admin/units-admin.component';

const routes: Routes = [
  {
    path: '',
    component: UnitsAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnitsAdminRoutingModule {}
