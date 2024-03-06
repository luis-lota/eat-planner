import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user: any = '';
  constructor(public auth: AuthService) {
    console.log('logging out', window.location.origin + '/eat-planner/');
    console.log('ambiente:', environment)
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

  }


  loginWidthRedirect() {
    this.auth.loginWithRedirect();
  }

  logoutRedirect() {
    console.log('logging out', window.location.origin + '/eat-planner/');
    this.auth.logout();

    if (environment.production) {
      this.auth.logout({
        clientId: environment.auth0.clientId,
        logoutParams: {
          returnTo: 'https://luis-lota.github.io/eat-planner/'
        }
      });
    } else {
      this.auth.logout();
    }
  }
}
