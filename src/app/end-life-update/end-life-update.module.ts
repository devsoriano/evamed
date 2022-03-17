import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndLifeUpdateRoutingModule } from './end-life-update-routing.module';
import { EndLifeUpdateComponent } from './components/end-life-update/end-life-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { IntermedialComponent } from './components/intermedial/intermedial.component';

@NgModule({
  declarations: [EndLifeUpdateComponent, IntermedialComponent],
  imports: [
    CommonModule,
    EndLifeUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [EndLifeUpdateComponent, IntermedialComponent],
  entryComponents: [IntermedialComponent],
})
export class EndLifeUpdateModule {}
