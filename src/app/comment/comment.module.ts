import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import {CommentComponent, CommentsComponent, FullCommentComponent, } from "../components/";
import { CommentRoutingModule } from './comment-routing.module';
import {CommentService} from "../service";



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
