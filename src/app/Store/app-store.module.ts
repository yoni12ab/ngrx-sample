import { CounterModule } from './Counter/counter.module';
import { NgModule } from '@angular/core';
import { UsersStoreModule } from './Users/users-store.module';

@NgModule({
  imports: [CounterModule, UsersStoreModule]
})
export class AppStoreModule {}
