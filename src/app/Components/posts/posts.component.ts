import { Component, OnInit } from '@angular/core';

import { PostService } from 'src/app/Service/post.service';
import {IPost} from "../../Models/IPost";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

posts!:IPost[]

  constructor( private postService: PostService ) { }

  ngOnInit(): void {
      this.postService
      .getPosts()
      .subscribe(value => this.posts = value)

  }

}
