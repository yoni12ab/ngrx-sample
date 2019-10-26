import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const fetchUsers = createAction('[Users] get users');
export const setUsers = createAction(
  '[Users] set users',
  props<{ users: User[] }>()
);
