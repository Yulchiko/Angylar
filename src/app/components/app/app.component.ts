import { Component } from '@angular/core';

import {UserService} from "../../service/user.service";
import {IUser} from "../../models/IUser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
user: IUser;

constructor(private userService:UserService) {
}
  search(): void {
this.userService.getUser().subscribe(values => {
  const filterUsers = this.userService.filterUser(values, this.user)
console.log(filterUsers)
})
  }
}
