import { createReducer, on, Action } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const initialState = 0;

const localCounterReducer = createReducer(
  initialState,
  on(CounterActions.increment, state => state + 1),
  on(CounterActions.decrement, state => state - 1),
  on(CounterActions.reset, _ => 0)
);

export function counterReducer(state: number, action: Action) {
  return localCounterReducer(state, action);
}
