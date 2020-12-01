import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoFileRoutingModule } from './to-do-file-routing.module';
import { ToDoFileComponent } from './components/to-do-file/to-do-file.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';


@NgModule({
  declarations: [ToDoFileComponent],
  imports: [
    CommonModule,
    ToDoFileRoutingModule,
    SharedModule,
    FormsModule,
    MaterialModule
  ]
})
export class ToDoFileModule { }
