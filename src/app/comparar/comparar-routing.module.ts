import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompararComponent } from './component/comparar/comparar.component';

const routes: Routes = [
  {
    path:'',
    component: CompararComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompararRoutingModule { }
