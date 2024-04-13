import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppState, AuthService } from '@auth0/auth0-angular';
import { LoadingComponent } from '../shared/loading/loading.component';
import { Store } from '@ngrx/store';
import { FeatureAuthActions } from '../../auth/store/actions';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule, LoadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  user: any = '';
  constructor(public auth: AuthService, private store: Store<AppState>) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.user = user;
      }
    });

  }

  logoutRedirect() {
    this.store.dispatch(FeatureAuthActions.postLogoutAPI$());
  }
}
