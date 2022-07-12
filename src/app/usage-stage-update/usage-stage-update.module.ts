import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStageUpdateRoutingModule } from './usage-stage-update-routing.module';
import { UsageStageUpdateComponent } from './components/usage-stage-update/usage-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';
import { PassStepComponent } from './components/pass-step/pass-step.component';

@NgModule({
  declarations: [UsageStageUpdateComponent, IntermedialComponent, PassStepComponent],
  imports: [
    CommonModule,
    UsageStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [UsageStageUpdateComponent, IntermedialComponent, PassStepComponent],
  entryComponents: [IntermedialComponent, PassStepComponent],
})
export class UsageStageUpdateModule {}
