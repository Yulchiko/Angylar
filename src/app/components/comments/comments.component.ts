import { Component, OnInit } from '@angular/core';
import {IComment} from "../../models/IComment";
import {CommentService} from "../../service/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:IComment[];
  constructor(private commentService: CommentService) { }

  ngOnInit(): void {
    this.commentService.getComment().subscribe(value=> this.comments=value)
  }

}
