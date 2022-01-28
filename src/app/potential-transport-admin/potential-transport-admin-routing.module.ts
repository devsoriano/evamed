import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PotentialTransportComponent } from './components/potential-transport/potential-transport.component';
import { AddPotentialTransportComponent } from './components/add-potential-transport/add-potential-transport.component';
import { UpdatePotentialTransportComponent } from './components/update-potential-transport/update-potential-transport.component';

const routes: Routes = [
  {
    path: '',
    component: PotentialTransportComponent,
  },
  {
    path: 'add',
    component: AddPotentialTransportComponent,
  },
  {
    path: 'update/:id',
    component: UpdatePotentialTransportComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotentialTransportAdminRoutingModule {}
