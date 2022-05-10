import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../model/IPost.interface";

@Injectable({
  providedIn: 'root'
})
export class PostService {

private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor( private httpClient:HttpClient) {


  }
  getAllPosts(): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(this.url)
  }
  getSiglePost(id: number): Observable<IPost>{
    return this.httpClient.get<IPost>(this.url + '/' + id);
  }
}
