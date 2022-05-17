import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IComment} from "../../models/IComment";
import { CommentService } from 'src/app/service/comment.service';

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent {

  comment:IComment;
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id})=> {
      this.commentService.getSigleComment(id).subscribe(data => this.comment = data)
    })}
}
