import { Component } from '@angular/core';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  user: any;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {
    this.user = this.authService.authState.subscribe(user=> {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigate(['/invalid']);
    }
  }
}
