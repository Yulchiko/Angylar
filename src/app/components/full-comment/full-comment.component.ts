import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { CommentService } from 'src/app/service';
import {ICommentInterface} from "../../models";

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent {

  comment:ICommentInterface;
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {
    this.activatedRoute.params.subscribe(({id})=> {
      this.commentService.getSigleComment(id).subscribe(data => this.comment = data)
    })}
}
