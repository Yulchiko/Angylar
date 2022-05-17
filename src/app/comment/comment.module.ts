import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentRoutingModule } from './comment-routing.module';

import {CommentComponent} from "../components/comment/comment.component";
import {CommentsComponent} from "../components/comments/comments.component";
import {FullCommentComponent} from "../components/full-comment/full-comment.component";
import {CommentService} from "../service/comment.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
      CommentComponent,
      CommentsComponent,
      FullCommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
      HttpClientModule
  ],
  providers:[CommentService]
})
export class CommentModule { }
