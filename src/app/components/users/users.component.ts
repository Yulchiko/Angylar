import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IUserInterface} from "../../interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users:IUserInterface[]
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(({Users}) => this.users= Users)
  }
}
