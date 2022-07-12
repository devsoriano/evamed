import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManualRoutingModule } from './user-manual-routing.module';
import { UserManualComponent } from './components/user-manual/user-manual.component';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../material/material.module';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [UserManualComponent],
  imports: [
    CommonModule,
    UserManualRoutingModule,
    SharedModule,
    MaterialModule,
    FormsModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    ChartsModule,
  ],
  exports: [UserManualComponent],
})
export class UserManualModule {}
