import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home-evamed',
        pathMatch: 'full',
      },
      {
        path: 'home-evamed',
        canActivate: [AdminGuard],
        loadChildren: () => import('./home-evamed/home-evamed.module').then(m => m.HomeEvamedModule)
      },
      {
        path: 'do-files',
        canActivate: [AdminGuard],
        loadChildren: () => import('./to-do-file/to-do-file.module').then(m => m.ToDoFileModule)
      },
      {
        path: 'stages-dashboard',
        canActivate: [AdminGuard],
        loadChildren: () => import('./principal-dashboard/principal-dashboard.module').then(m => m.PrincipalDashboardModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
