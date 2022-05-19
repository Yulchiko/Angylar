import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUserInterface} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
users: IUserInterface[];
private url = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }


  getUserById(id:number): Observable<IUserInterface> {
    return this.httpClient.get<IUserInterface>(this.url + '/' + id);
  }

  getUser(): Observable<IUserInterface[]>{
    return this.httpClient.get<IUserInterface[]>(this.url)
  }

}
