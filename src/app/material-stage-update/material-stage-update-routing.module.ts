import { MaterialStageUpdateComponent } from './components/material-stage-update/material-stage-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  component: MaterialStageUpdateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialStageUpdateRoutingModule { }
