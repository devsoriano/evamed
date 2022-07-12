import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserManualComponent } from './components/user-manual/user-manual.component';

const routes: Routes = [
  {
    path: '',
    component: UserManualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManualRoutingModule {}
