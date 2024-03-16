import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { FeatureAuthActions } from '../store/actions';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private store: Store<AppState>) {}

  login(): void {
    this.store.dispatch(FeatureAuthActions.postLoginAPI$());
  }
}
