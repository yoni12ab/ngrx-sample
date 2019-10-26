import { Injectable } from '@angular/core';
import { UsersRes } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private USERS_BASE_URL = 'https://n161.tech/api/dummyapi/';
  constructor(private http: HttpClient) {}
  fetchUsers(): Observable<UsersRes> {
    return this.http.get<UsersRes>(`${this.USERS_BASE_URL}user?limit=5&page=1`);
  }
}
