import { Routes } from '@angular/router';
import { navigationRoutes, sideNavigationPath } from './core/components/navigation/navigation-routing.module';
import { NavigationHomeComponent } from './core/components/navigation/components/navigation-home/navigation-home.component';

export const routes: Routes = [
    {
        path: sideNavigationPath,
        component: NavigationHomeComponent,
        children: navigationRoutes,
    },
];
