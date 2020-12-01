import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstructionStageRoutingModule } from './construction-stage-routing.module';
import { ConstructionStageComponent } from './components/construction-stage/construction-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [
    ConstructionStageComponent
  ],
  imports: [
    CommonModule,
    ConstructionStageRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ]
})
export class ConstructionStageModule { }
