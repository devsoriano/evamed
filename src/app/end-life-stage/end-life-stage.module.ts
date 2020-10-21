import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndLifeStageRoutingModule } from './end-life-stage-routing.module';
import { EndLifeStageComponent } from './components/end-life-stage/end-life-stage.component';


@NgModule({
  declarations: [EndLifeStageComponent],
  imports: [
    CommonModule,
    EndLifeStageRoutingModule
  ]
})
export class EndLifeStageModule { }
