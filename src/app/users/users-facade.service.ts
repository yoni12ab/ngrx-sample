import { Injectable } from '@angular/core';
import { UsersStateService } from './users-state.service';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {
  constructor(private usersStateService: UsersStateService) {}

  public getUsers() {
    return this.usersStateService.getUsers();
  }
}
