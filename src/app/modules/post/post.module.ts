import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {FullPostComponent, PostComponent, PostsComponent } from 'src/app/components';
import {PostResolver, PostService, PostsResolver } from 'src/app/service';



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
  providers:[PostService, PostResolver, PostsResolver]
})
export class PostModule { }
