import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modelo/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  //httpClient= inject( HttpClient);
  getUsers():Observable<User[]>  {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
