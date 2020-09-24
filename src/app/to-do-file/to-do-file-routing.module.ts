import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDoFileComponent } from './components/to-do-file/to-do-file.component';


const routes: Routes = [
  {
    path: '',
    component: ToDoFileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoFileRoutingModule { }
