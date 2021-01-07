import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent implements OnInit {
  constructor(public service: UserService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  //Registers the users
  onSubmit() {
    this.service.register().subscribe(
      (res: any) => {
        if (res.status == 200) {
          this.service.formModel.reset();
          this.toastr.success('New user created', 'Registration successful');
        }
      },
      (err: any) => {
        this.toastr.error(err.error.message, 'Registration failed');
        console.log(err);
      }
    );
  }
}
