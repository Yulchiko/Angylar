import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent} from "../components/post/post.component";
import {PostsComponent} from "../components/posts/posts.component";
import {FullPostComponent} from "../components/full-post/full-post.component";
import {PostService} from "../service/post.service";


@NgModule({
  declarations: [
      PostComponent,
      PostsComponent,
      FullPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ],
  providers:[PostService]
})
export class PostModule { }
