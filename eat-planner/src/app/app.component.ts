import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './store/reducers';
import { RootSelectors } from './store/selectors/';
import { SideNavComponent } from './libs/shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  count$?: Observable<any>;
  countSub?: Subscription

  constructor(private store: Store<AppState>) {
    this.count$ = this.store.select(RootSelectors.selectFeature);
  }
}
