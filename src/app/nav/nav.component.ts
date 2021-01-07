import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  isAdmin;
  constructor(
    private router: Router,
    private authService: AuthService,
    private accountService: UserService
  ) {}

  ngOnInit(): void {
    // this.isAdmin = this.authService.IsAdmin();
  }
  // Makes sure when the user logs out it deletes all the localstorages
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/user/login']);
  }
}
