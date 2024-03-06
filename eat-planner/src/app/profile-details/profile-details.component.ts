import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.scss'
})
export class ProfileDetailsComponent {
  profileJson: string = '';

  constructor(public auth: AuthService) { 
    this.auth.user$.subscribe((profile) => {
      if(profile) {
        this.profileJson = JSON.stringify(profile, null, 2);
      }
    });
  }

}
