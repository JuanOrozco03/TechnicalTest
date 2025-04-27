import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const sideNavigationPath = '';

export const navigationRoutes: Routes = [
  {
    path: 'user-management',
    loadChildren: () =>
      import('../../../pages/user-management/user-management.module').then(
        (m) => m.UserManagementModule,
      ),
  },
  {
    path: '**',
    redirectTo: 'user-management',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
