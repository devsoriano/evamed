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
        loadChildren: () =>
          import('./home-evamed/home-evamed.module').then(
            (m) => m.HomeEvamedModule
          ),
      },
      {
        path: 'do-files',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./to-do-file/to-do-file.module').then(
            (m) => m.ToDoFileModule
          ),
      },
      {
        path: 'materials-stage',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./materials-stage/materials-stage.module').then(
            (m) => m.MaterialsStageModule
          ),
      },
      {
        path: 'construction-stage',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./construction-stage/construction-stage.module').then(
            (m) => m.ConstructionStageModule
          ),
      },
      {
        path: 'usage-stage',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./usage-stage/usage-stage.module').then(
            (m) => m.UsageStageModule
          ),
      },
      {
        path: 'end-life-stage',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./end-life-stage/end-life-stage.module').then(
            (m) => m.EndLifeStageModule
          ),
      },
      {
        path: 'update-end-life',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./end-life-update/end-life-update.module').then(
            (m) => m.EndLifeUpdateModule
          ),
      },
      {
        path: 'resultados',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./comparar/comparar.module').then((m) => m.CompararModule),
      },
      {
        path: 'acerca-de',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./acerca-de/acerca-de.module').then((m) => m.AcercaDeModule),
      },
      {
        path: 'material-stage-update',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./material-stage-update/material-stage-update.module').then(
            (m) => m.MaterialStageUpdateModule
          ),
      },
      {
        path: 'construction-stage-update',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import(
            './construction-stage-update/construction-stage-update.module'
          ).then((m) => m.ConstructionStageUpdateModule),
      },
      {
        path: 'usage-stage-update',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./usage-stage-update/usage-stage-update.module').then(
            (m) => m.UsageStageUpdateModule
          ),
      },
      {
        path: 'admin-materials',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./materials-admin/materials-admin.module').then(
            (m) => m.MaterialsAdminModule
          ),
      },
      {
        path: 'admin-units',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./units-admin/units-admin.module').then(
            (m) => m.UnitsAdminModule
          ),
      },
      {
        path: 'admin-db-materials',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./data-base-admin/data-base-admin.module').then(
            (m) => m.DataBaseAdminModule
          ),
      },
      {
        path: 'admin-potential',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./potential-admin/potential-admin.module').then(
            (m) => m.PotentialAdminModule
          ),
      },
      {
        path: 'admin-transports',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./transport-admin/transport-admin.module').then(
            (m) => m.TransportAdminModule
          ),
      },
      {
        path: 'admin-machinery',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./machinery-admin/machinery-admin.module').then(
            (m) => m.MachineryAdminModule
          ),
      },
      {
        path: 'admin-energy',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./energy-admin/energy-admin.module').then(
            (m) => m.EnergyAdminModule
          ),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./principal-admin/principal-admin.module').then(
            (m) => m.PrincipalAdminModule
          ),
      },
    ],
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
