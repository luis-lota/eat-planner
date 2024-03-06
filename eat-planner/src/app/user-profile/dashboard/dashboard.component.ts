import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user:any = '';
  constructor(public auth: AuthService) {
    this.auth.user$.subscribe((user) => {
      if(user) {
        this.user = user;
      }
    });
  }


  loginWidthRedirect() {
    this.auth.loginWithRedirect();
  }

  logoutRedirect() {
    console.log('logging out',window.location.origin + '/eat-planner/');
    this.auth.logout({
      logoutParams : {
        federated : true,
        returnTo: 'https://luis-lota.github.io/eat-planner/'
      }
    })
  }
}
