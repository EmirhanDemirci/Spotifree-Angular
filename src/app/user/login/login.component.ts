import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  formModel = {
    username: '',
    password: '',
  };
  constructor(
    private service: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    console.log('formValueUsername: ' + form.value.username);

    this.service.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res);
        this.toastr.success('Authenticated', 'Login successful');
      },
      (err) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Registration failed');
        console.log(err);
      }
    );
  }
}
