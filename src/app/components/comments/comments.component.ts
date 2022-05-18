import { Component, OnInit } from '@angular/core';

import {ICommentInterface} from "../../models";
import {CommentService} from "../../service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:ICommentInterface[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComment().subscribe(value=> this.comments=value)
  }

}
