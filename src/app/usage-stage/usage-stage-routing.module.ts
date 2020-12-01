import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsageStageComponent } from './components/usage-stage/usage-stage.component';


const routes: Routes = [
  {
    path: '',
    component: UsageStageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageStageRoutingModule { }
