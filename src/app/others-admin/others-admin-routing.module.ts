import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OthersAdminComponent } from './components/others-admin/others-admin.component';


const routes: Routes = [
  {
    path: '',
    component: OthersAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersAdminRoutingModule { }
