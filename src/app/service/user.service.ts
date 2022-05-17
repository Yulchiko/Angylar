import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: IUser[];
private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }


  getUserById(id:number): Observable<IUser> {
    return this.httpClient.get<IUser>(this.url + '/' + id);
  }

  getUser(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(this.url)
  }

}
