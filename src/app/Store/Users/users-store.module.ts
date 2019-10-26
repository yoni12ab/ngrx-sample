import { NgModule } from '@angular/core';
import { UsersReducer } from './users.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './users.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('users', UsersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})
export class UsersStoreModule {}
