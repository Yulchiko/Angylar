import { Component, OnInit } from '@angular/core';
import {IComment} from "../../Models/IComment";
import {CommentService} from "../../Service/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments!: IComment[];

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {

    this.commentService
      .getComments()
      .subscribe(value => this.comments = value)
  }

}
