import { NgModule } from '@angular/core';
import { UsersReducer } from './users.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [StoreModule.forFeature('users', UsersReducer)]
})
export class UsersStoreModule {}
