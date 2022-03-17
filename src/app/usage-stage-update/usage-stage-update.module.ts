import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStageUpdateRoutingModule } from './usage-stage-update-routing.module';
import { UsageStageUpdateComponent } from './components/usage-stage-update/usage-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';

@NgModule({
  declarations: [UsageStageUpdateComponent, IntermedialComponent],
  imports: [
    CommonModule,
    UsageStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [UsageStageUpdateComponent, IntermedialComponent],
  entryComponents: [IntermedialComponent],
})
export class UsageStageUpdateModule {}
