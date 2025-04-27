import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationModule } from './core/components/navigation/navigation.module';
import { SnackbarModule } from './core/components/snackbar/snackbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationModule, SnackbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user-management';
}
