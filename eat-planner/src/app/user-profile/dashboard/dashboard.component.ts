import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoadingComponent } from '../../shared/loading/loading.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule,LoadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user: any = '';
  constructor(public auth: AuthService) {
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
  }
}
