import { Component, inject, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-home',
  standalone: false,
  templateUrl: './navigation-home.component.html',
  styleUrl: './navigation-home.component.scss'
})
export class NavigationHomeComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  sidenavMode!: MatDrawerMode;

  router = inject(Router)
  breakpointService = inject(BreakpointObserver)

  ngAfterViewInit() {
    this.breakPointResponsive();
  }

  toggle(){    
    this.sidenav.toggle();
  }

  navigateRoute(navigateTo: string){
    this.router.navigate([navigateTo])
  }

  breakPointResponsive() {
    this.breakpointService
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) => {
        if (result.matches) {          
          this.sidenav.open();
          this.sidenavMode = 'side';
          return;
        }
        this.sidenav.close();
        this.sidenavMode = 'over';
      });
  }
}
