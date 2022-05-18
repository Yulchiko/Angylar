import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserInterface} from "../../models";
import {UserService} from "../../service";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent {
user:IUserInterface;
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.userService.getUserById(id).subscribe(data =>this.user=data)
    })
  }

}
