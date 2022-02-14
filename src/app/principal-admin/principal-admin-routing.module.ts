import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalAdminComponent } from './components/principal-admin/principal-admin.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalAdminRoutingModule {}
