import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionStageComponent } from './components/construction-stage/construction-stage.component';


const routes: Routes = [
  {
    path: '',
    component: ConstructionStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionStageRoutingModule { }
