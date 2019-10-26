import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import * as UserActions from '../Store/Users/users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersStateService {
  private users$: any;
  constructor(private appStore: Store<{ users: any }>) {
    this.init();
  }

  private init() {
    this.users$ = this.appStore.select('users');
  }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  fetchUsers(): void {
    this.appStore.dispatch(UserActions.fetchUsers());
  }
}
