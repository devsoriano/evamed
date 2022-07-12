import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructionStageUpdateComponent } from './components/construction-stage-update/construction-stage-update.component';


const routes: Routes = [
  {
    path: '',
    component: ConstructionStageUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstructionStageUpdateRoutingModule { }
