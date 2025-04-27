import { Component, Input } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  standalone: false,
  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.scss'
})
export class SnackbarComponent {
  @Input() message: string = '';
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() colorAux: string = '';
  snackbarRef!: MatSnackBarRef<any>;

  dismiss(){
    this.snackbarRef.dismiss();
  }
}
