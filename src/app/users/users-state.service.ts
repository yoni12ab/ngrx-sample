import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

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

  getUsers() {
    return this.users$;
  }
}
