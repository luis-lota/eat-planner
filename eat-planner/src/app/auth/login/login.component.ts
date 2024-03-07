import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private auth: AuthService) { }

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }
}
