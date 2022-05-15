import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: IUser[];
  constructor(private httpClient: HttpClient) { }


  getUserById(id:number): Observable<IUser> {
    return this.httpClient.get<IUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

  getUser(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  }
  filterUser(users: IUser[], user: IUser): IUser[]{
    return users.filter(value => value.id === user.id || value.name.toLowerCase().includes(user.name.toLowerCase()));
  }
}
