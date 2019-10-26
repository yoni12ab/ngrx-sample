import { Component, OnInit } from '@angular/core';
import { UsersFacadeService } from './users-facade.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private usersFacade: UsersFacadeService) {}

  ngOnInit() {
    this.usersFacade.fetchUsers();
  }
}
