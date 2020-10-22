import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialsStageComponent } from './components/materials-stage/materials-stage.component';

const routes: Routes = [{
  path: '',
  component: MaterialsStageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsStageRoutingModule { }
