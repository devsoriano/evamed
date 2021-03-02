import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsStageRoutingModule } from './materials-stage-routing.module';
import { MaterialsStageComponent } from './components/materials-stage/materials-stage.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { AddConstructiveElementComponent } from './components/add-constructive-element/add-constructive-element.component';
import { AddConstructiveSystemComponent } from './components/add-constructive-system/add-constructive-system.component';

@NgModule({
  declarations: [
    AddConstructiveElementComponent,
    MaterialsStageComponent,
    AddConstructiveSystemComponent
  ],
  imports: [
    CommonModule,
    MaterialsStageRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AddConstructiveElementComponent
  ],
  entryComponents: [
    AddConstructiveElementComponent
  ]
})
export class MaterialsStageModule { }
