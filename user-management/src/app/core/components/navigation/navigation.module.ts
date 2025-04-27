import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavigationHomeComponent } from './components/navigation-home/navigation-home.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


@NgModule({
  declarations: [NavigationHomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ToolbarComponent,
    NavigationRoutingModule
  ],
  exports: [NavigationHomeComponent]
})
export class NavigationModule { }
