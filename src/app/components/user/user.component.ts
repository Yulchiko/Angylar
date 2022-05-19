import {Component, Input, OnInit} from '@angular/core';

import {IUserInterface} from "../../interface";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user:IUserInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
