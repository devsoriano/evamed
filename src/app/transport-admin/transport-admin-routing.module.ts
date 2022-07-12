import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransportAdminComponent } from './components/transport-admin/transport-admin.component';
import { UpdateTransportComponent } from './components/update-transport/update-transport.component';

const routes: Routes = [
  {
    path: '',
    component: TransportAdminComponent,
  },
  {
    path: 'update/:id',
    component: UpdateTransportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransportAdminRoutingModule {}
