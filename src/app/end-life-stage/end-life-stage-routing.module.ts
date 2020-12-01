import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndLifeStageComponent } from './components/end-life-stage/end-life-stage.component';


const routes: Routes = [
  {
    path: '',
    component: EndLifeStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EndLifeStageRoutingModule { }
