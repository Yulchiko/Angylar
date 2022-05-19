import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ICommentInterface} from "../../interface";
import {CommentService} from "../comment.service";

@Injectable({
  providedIn: 'root'
})
export class CommentsResolver implements Resolve<ICommentInterface[]> {
  constructor(private commentService: CommentService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICommentInterface[]> {
    return this.commentService.getComment();
  }
}
