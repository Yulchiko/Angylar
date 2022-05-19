import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';
import {PostService} from "../post.service";
import {IPostInterface} from "../../interface";

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPostInterface> {
  constructor(private postService: PostService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPostInterface> {
    let {id} = route.params;
    return this.postService.getSiglePost(id);

  }
}
