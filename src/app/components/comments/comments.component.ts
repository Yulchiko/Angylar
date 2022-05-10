import { Component} from '@angular/core';

import {IComment} from "../../model/IComment.interface";
import {CommentService} from "../../Services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent {

  comments: IComment[]

  constructor(private commentService: CommentService) {
    commentService.getAllComment().subscribe(value => this.comments = value)
  }
}