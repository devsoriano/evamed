import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompararComponent } from './component/comparar/comparar.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { RadialChartComponent } from '../radial-chart/radial-chart.component';

const routes: Routes = [
  {
    path:'',
    component: CompararComponent
  },
  {
    path:'pie', component: PieChartComponent
  },
  {
    path: 'radial', component: RadialChartComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompararRoutingModule { }
