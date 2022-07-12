import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './components/about/about.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    ChartsModule,
  ],
  exports: [AboutComponent],
})
export class AboutModule {}
