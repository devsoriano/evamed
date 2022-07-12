import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBaseAdminComponent } from './components/data-base-admin/data-base-admin.component';

const routes: Routes = [
  {
    path: '',
    component: DataBaseAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataBaseAdminRoutingModule {}
