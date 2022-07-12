import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStageRoutingModule } from './usage-stage-routing.module';
import { UsageStageComponent } from './components/usage-stage/usage-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';
import { PassStepComponent } from './components/pass-step/pass-step.component';

@NgModule({
  declarations: [UsageStageComponent, IntermedialComponent, PassStepComponent],
  imports: [
    CommonModule,
    UsageStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [IntermedialComponent, PassStepComponent],
  entryComponents: [IntermedialComponent, PassStepComponent],
})
export class UsageStageModule {}
