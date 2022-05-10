import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost} from "../../model/IPost.interface";
import {PostService} from 'src/app/services/post.service';

@Component({
    selector: 'app-full-post',
    templateUrl: './full-post.component.html',
    styleUrls: ['./full-post.component.css']
})
export class FullPostComponent {
    post: IPost;

    constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

        this.activatedRoute.params
            .subscribe(({id}) => {
                this.postService.getSiglePost(id)
                    .subscribe(data => this.post = data)
            })
}}
