import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";

import { CommentRoutingModule } from './comment-routing.module';
import { CommentComponent, CommentsComponent, FullCommentComponent } from 'src/app/components';
import {CommentResolver, CommentService, CommentsResolver} from 'src/app/service';




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
  providers:[CommentService, CommentResolver, CommentsResolver]
})
export class CommentModule { }
