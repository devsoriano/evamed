import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalDashboardComponent } from './components/principal-dashboard/principal-dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: PrincipalDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalDashboardRoutingModule { }
