import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersApiService } from './users-api.service';
import * as UsersActions from './users.actions';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()
export class UsersEffects {
  public fetchUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.fetchUsers),
      mergeMap(() =>
        this.usersApiService.fetchUsers().pipe(
          map(usersRes => UsersActions.setUsers({ users: usersRes.data })),
          catchError(_ => EMPTY)
        )
      )
    )
  );

  constructor(
    private usersApiService: UsersApiService,
    private actions$: Actions
  ) {}
}
