import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineryAdminComponent } from './components/machinery-admin/machinery-admin.component';
import { UpdateMachineryComponent } from './components/update-machinery/update-machinery.component';

const routes: Routes = [
  {
    path: '',
    component: MachineryAdminComponent,
  },
  {
    path: 'update/:id',
    component: UpdateMachineryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MachineryAdminRoutingModule {}
