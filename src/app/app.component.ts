import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, StoreModule } from '@ngrx/store';
import * as countActions from './Store/Counter/counter.actions';
import { reset } from './Store/Counter/counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'storeExample';
  count$: Observable<number>;
  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(countActions.increment());
  }

  decrement() {
    this.store.dispatch(countActions.decrement());
  }

  reset() {
    this.store.dispatch(countActions.reset());
  }
}
