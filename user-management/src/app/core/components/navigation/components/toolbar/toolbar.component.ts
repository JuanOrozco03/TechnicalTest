import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../../../shared/material/material.module';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  @Input() toggle!: MatSidenav;
  @Output() emit = new EventEmitter();
}
