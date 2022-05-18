import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { ICommentInterface } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor( private httpClient:HttpClient) {


  }
  getComment(): Observable<ICommentInterface[]>{
    return this.httpClient.get<ICommentInterface[]>(this.url)
  }
  getSigleComment(id: number): Observable<ICommentInterface>{
    return this.httpClient.get<ICommentInterface>(this.url + '/' + id);
  }
}