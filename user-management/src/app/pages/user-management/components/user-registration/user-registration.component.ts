import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../core/components/snackbar/services/snackbar.service';
import { SnackbarType } from '../../../../core/components/snackbar/models/snackbar-type';

@Component({
  selector: 'app-user-registration',
  standalone: false,
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  userRegistration!: FormGroup;
  countries = [
    {value: 'US', viewValue: 'United States'},
    {value: 'MX', viewValue: 'Mexico'},
    {value: 'CO', viewValue: 'Colombia'},
    {value: 'AR', viewValue: 'Argentina'},
    {value: 'PE', viewValue: 'Peru'},
    {value: 'ES', viewValue: 'Spain'},
  ];

  formBuilder = inject(FormBuilder);
  snackbar = inject(SnackbarService)

  ngOnInit(){
    this.userRegistration = this.buildRegistrationForm()
  }

  buildRegistrationForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/)
      ]],
      email: ['', [
        Validators.required, 
        Validators.email
      ]],
      age: ['', [
        Validators.min(18),
        Validators.pattern(/^[0-9]+$/)
      ]],
      country: ['']
    })
  }

  submit(){
    this.snackbar.openCustomSnackbar("User registered successfully", SnackbarType.success)
  }
}
