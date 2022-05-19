import {Component, Input, OnInit} from '@angular/core';

import {IPostInterface} from "../../interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post:IPostInterface
  constructor() { }

  ngOnInit(): void {
  }

}
