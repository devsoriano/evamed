import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialStageUpdateRoutingModule } from './material-stage-update-routing.module';
import { MaterialStageUpdateComponent } from './components/material-stage-update/material-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';
import { PassStepComponent } from './components/pass-step/pass-step.component';

@NgModule({
  declarations: [MaterialStageUpdateComponent, IntermedialComponent, PassStepComponent],
  imports: [
    CommonModule,
    MaterialStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [MaterialStageUpdateComponent, IntermedialComponent, PassStepComponent],
  entryComponents: [IntermedialComponent, PassStepComponent],
})
export class MaterialStageUpdateModule {}
