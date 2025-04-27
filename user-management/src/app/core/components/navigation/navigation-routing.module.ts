import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const sideNavigationPath = '';

export const navigationRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(navigationRoutes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
