import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}
  readonly BaseURI = 'https://bitcoggapi.azurewebsites.net/api';
  readonly LocalURI = 'http://localhost:9191';

  // Form model this is used to log the user in
  formModel = this.fb.group({
    username: ['', Validators.required],
    passwords: this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.comparePasswords }
    ),
  });
  // A function to compare passwords (front-end)
  comparePasswords(fb: FormGroup) {
    const confirmPasswordCtrl = fb.get('confirmPassword');
    if (
      confirmPasswordCtrl.errors == null ||
      'passwordMismatch' in confirmPasswordCtrl.errors
    ) {
      if (fb.get('password').value !== confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }

  // A funtion to register the user based on the values in the form
  register() {
    const body = {
      username: this.formModel.value.username,
      password: this.formModel.value.passwords.password,
    };
    console.log(body);
    return this.http.post(this.LocalURI + '/addUser', body, {
      observe: 'response',
    });
  }

  // A function to login the user
  login(formData) {
    console.log(formData);
    return this.http.post(this.LocalURI + '/authenticate', formData, {
      responseType: 'text',
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // A function to get all the users before the admin can delete it
  //   getAllUsers() {
  //     var userId = this.authService.GetUser().id;
  //     return this.http.get(`${this.BaseURI}/User/${userId}/all`);
  //   }

  // A function that can remove all users based on if the user is admin or not
  //   deleteUser(selectedId: number) {
  //     console.log(selectedId);
  //     var id = this.authService.GetUser().id;
  //     return this.http.post(`${this.BaseURI}/User/${id}/delete`, selectedId);
  //   }
}
