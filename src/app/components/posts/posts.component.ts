import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import {IPostInterface} from "../../interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: IPostInterface[];
  //constructor(private postService: PostService) {
   // this.postService.getPosts().subscribe(value=>this.posts=value)
  //}
constructor(private activatedRoute: ActivatedRoute) {
activatedRoute.data.subscribe(({Posts}) => this.posts= Posts)
}


}
