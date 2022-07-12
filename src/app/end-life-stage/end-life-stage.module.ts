import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndLifeStageRoutingModule } from './end-life-stage-routing.module';
import { EndLifeStageComponent } from './components/end-life-stage/end-life-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';
import { PassStepComponent } from './components/pass-step/pass-step.component';

@NgModule({
  declarations: [EndLifeStageComponent, IntermedialComponent, PassStepComponent],
  imports: [
    CommonModule,
    EndLifeStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [IntermedialComponent, PassStepComponent],
  entryComponents: [IntermedialComponent, PassStepComponent],
})
export class EndLifeStageModule {}
