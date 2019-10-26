import * as UserActions from './users.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { User } from '../../models/user.model';

const initialState = [
  {
    firstName: 'Yoni test'
  },
  {
    firstName: 'Gabi Gabi'
  }
];

const localReducer = createReducer(
  initialState,
  on(UserActions.setUsers, (state, { users }) => [...users])
);

export function UsersReducer(state: any, action: Action) {
  return localReducer(state, action);
}
