import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStageUpdateRoutingModule } from './usage-stage-update-routing.module';
import { UsageStageUpdateComponent } from './components/usage-stage-update/usage-stage-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [UsageStageUpdateComponent],
  imports: [
    CommonModule,
    UsageStageUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class UsageStageUpdateModule { }
