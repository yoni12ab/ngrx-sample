import { Component, OnInit } from '@angular/core';
import { UsersFacadeService } from '../users-facade.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  public users$;
  constructor(private usersFacade: UsersFacadeService) {}

  ngOnInit() {
    this.users$ = this.usersFacade.getUsers();
  }
}
