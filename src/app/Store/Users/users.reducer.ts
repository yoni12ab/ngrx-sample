import * as UserActions from './users.actions';
import { createReducer, on, Action } from '@ngrx/store';

const initialState = [
  {
    name: 'Yoni test'
  },
  {
    name: 'Gabi Gabi'
  }
];

const localReducer = createReducer(
  initialState
  // on(UserActions.getUsers, (state,action: Action)=> )
);

export function UsersReducer(state: any, action: Action) {
  return localReducer(state, action);
}
