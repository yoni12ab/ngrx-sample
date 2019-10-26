import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const router: Routes = [
  {
    path: '',
    component: UsersComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
