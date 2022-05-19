import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {IUserInterface} from "../../interface";
import {UserService} from "../user.service";

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<IUserInterface[]> {
  constructor(private userService: UserService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserInterface[]> {
    return this.userService.getUser();
  }
}
