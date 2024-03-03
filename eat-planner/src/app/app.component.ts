import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private store = inject(Store);
  count$?: Observable<number>;
  countSub?: Subscription

  constructor() {
    this.count$ = this.store.select('counter');
    this.countSub = this.count$.subscribe((count) => console.log('count:', count));
  }
}
