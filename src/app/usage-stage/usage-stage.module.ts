import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageStageRoutingModule } from './usage-stage-routing.module';
import { UsageStageComponent } from './components/usage-stage/usage-stage.component';


@NgModule({
  declarations: [UsageStageComponent],
  imports: [
    CommonModule,
    UsageStageRoutingModule
  ]
})
export class UsageStageModule { }
