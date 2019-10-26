import { Injectable } from '@angular/core';
import { UsersStateService } from './users-state.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersFacadeService {
  constructor(private usersStateService: UsersStateService) {}

  public getUsers(): Observable<User[]> {
    return this.usersStateService.getUsers();
  }

  public fetchUsers(): void {
    this.usersStateService.fetchUsers();
  }
}
