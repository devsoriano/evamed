import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsageStageRoutingModule } from './usage-stage-routing.module';
import { UsageStageComponent } from './components/usage-stage/usage-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [UsageStageComponent],
  imports: [
    CommonModule,
    UsageStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class UsageStageModule { }
