import { Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { PostService } from 'src/app/service';
import {IPostInterface} from "../../models";


@Component({
  selector: 'app-full-post',
  templateUrl: './full-post.component.html',
  styleUrls: ['./full-post.component.css']
})
export class FullPostComponent {

  post:IPostInterface;
  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(({id})=> {
      this.postService.getSiglePost(id).subscribe(data => this.post = data)
    })}
}
