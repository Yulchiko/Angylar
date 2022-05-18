import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostComponent, PostsComponent, FullPostComponent} from "../components";
import {PostService} from "../service";


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
