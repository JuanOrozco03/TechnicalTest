import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar.component';
import {
  SnackbarAuxColor,
  SnackbarIcon,
  SnackbarPrimaryColor,
  SnackbarType,
} from '../models/snackbar-type';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
    snackBar = inject(MatSnackBar)
    /**
     * @param message Enter the message you want to display
     * @param type Select one of the snackbar types contained in the SnackbarType enum
     * @returns Returns an alert with the message and the selected snackbar type
     */
    openCustomSnackbar(
    message: string,
    type: SnackbarType,
    ): MatSnackBarRef<SnackbarComponent> | null {
    if (!message) {
        return null;
    }

    const snackbarRef: MatSnackBarRef<SnackbarComponent> =
        this.snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        verticalPosition: 'top',
        });

    snackbarRef.afterDismissed().subscribe();

    snackbarRef.onAction().subscribe();

    snackbarRef.instance.message = message;

    snackbarRef.instance.icon = SnackbarIcon[type];
    snackbarRef.instance.color = SnackbarPrimaryColor[type];
    snackbarRef.instance.colorAux = SnackbarAuxColor[type];

    snackbarRef.instance.snackbarRef = snackbarRef;

    return snackbarRef;
    }
}
