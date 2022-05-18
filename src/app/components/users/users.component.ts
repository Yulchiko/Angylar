import { Component, OnInit } from '@angular/core';

import {IUserInterface} from "../../models/IUser.interface";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:IUserInterface[]
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.userService.getUser().subscribe(value => this.users=value)
  }

}
