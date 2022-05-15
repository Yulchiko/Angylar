import { Component } from '@angular/core';

import {PostService} from "../../services/post.service";
import {IPost} from "../../model/IPost.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
posts:IPost[]
  constructor(private postService:PostService) {
  postService.getAllPosts().subscribe(value => this.posts=value)
  }



}
