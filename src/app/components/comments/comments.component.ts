import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICommentInterface} from "../../interface";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent{
comments:ICommentInterface[];
  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.data.subscribe(({Comments}) => this.comments= Comments)
  }

}
