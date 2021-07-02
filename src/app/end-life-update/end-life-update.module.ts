import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EndLifeUpdateRoutingModule } from './end-life-update-routing.module';
import { EndLifeUpdateComponent } from './components/end-life-update/end-life-update.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';

@NgModule({
  declarations: [EndLifeUpdateComponent],
  imports: [
    CommonModule,
    EndLifeUpdateRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule,
  ],
})
export class EndLifeUpdateModule {}
