import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AppState } from './store/reducers';
import { RootSelectors } from './store/selectors/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  count$?: Observable<any>;
  countSub?: Subscription

  constructor(private store : Store<AppState>) {
    this.count$ = this.store.select(RootSelectors.selectFeature);
    let sub = this.count$.subscribe((state) => console.log('state:', state));
  }
}
