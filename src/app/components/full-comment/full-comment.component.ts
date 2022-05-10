import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {IComment} from "../../model/IComment.interface";

@Component({
  selector: 'app-full-comment',
  templateUrl: './full-comment.component.html',
  styleUrls: ['./full-comment.component.css']
})
export class FullCommentComponent implements OnInit {
comment:IComment;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(value => {
           this.comment = this.router.getCurrentNavigation()?.extras.state?.['data'] as IComment;
    });

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      let {state: {data}} = history;
       this.comment = data as IComment;
     });
  }

}