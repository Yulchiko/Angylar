import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

import {IUser} from "../Models/IUser";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    url = 'https://jsonplaceholder.typicode.com/users';


    constructor(private http: HttpClient) {
    }


    getUsers(): Observable< IUser[] > {
        return this.http
            .get < any[] > ( this.url );
    }
}