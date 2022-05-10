import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../model/IComment.interface";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor( private httpClient:HttpClient) {


  }
  getAllComment(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url)
  }
  getSigleComment(id: number): Observable<IComment>{
    return this.httpClient.get<IComment>(this.url + '/' + id);
  }
}