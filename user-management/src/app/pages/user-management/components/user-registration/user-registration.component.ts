import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from '../../../../core/components/snackbar/services/snackbar.service';
import { SnackbarType } from '../../../../core/components/snackbar/models/snackbar-type';
import { UserManagementService } from '../../services/user-management.service';
import { User } from '../../interfaces/users.interface';

@Component({
  selector: 'app-user-registration',
  standalone: false,
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.scss'
})
export class UserRegistrationComponent {
  userRegistration!: FormGroup;
  countries = [
    {value: 'United States'},
    {value: 'Mexico'},
    {value: 'Colombia'},
    {value: 'Argentina'},
    {value: 'Peru'},
    {value: 'Spain'},
  ];

  formBuilder = inject(FormBuilder);
  snackbar = inject(SnackbarService);
  userService = inject(UserManagementService)

  ngOnInit(){
    this.userRegistration = this.buildRegistrationForm();
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
    });
  }

  submit(){
    if (this.userRegistration.valid) {
      const newUser: User = this.userRegistration.value;
      this.userService.createUser(newUser);
      
      this.snackbar.openCustomSnackbar("User registered successfully", SnackbarType.success)
      
      this.userRegistration.reset();
    }
    
  }
}
