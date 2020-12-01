import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndLifeStageRoutingModule } from './end-life-stage-routing.module';
import { EndLifeStageComponent } from './components/end-life-stage/end-life-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [EndLifeStageComponent],
  imports: [
    CommonModule,
    EndLifeStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class EndLifeStageModule { }
