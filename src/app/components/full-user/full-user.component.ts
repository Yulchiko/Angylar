import { Component, OnInit } from '@angular/core';
import {IUser} from "../../models/IUser";
import {ActivatedRoute} from "@angular/router";

import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent {
user:IUser;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUserById(id).subscribe(data =>this.user=data)
    })
  }

}
