import { Component, inject, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-home',
  standalone: false,
  templateUrl: './navigation-home.component.html',
  styleUrl: './navigation-home.component.scss'
})
export class NavigationHomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  router = inject(Router)

  toggle(){    
    this.sidenav.toggle();
  }

  navigateRoute(navigateTo: string){
    this.router.navigate([navigateTo])
  }
}
