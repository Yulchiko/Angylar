import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IComment } from '../models/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor( private httpClient:HttpClient) {


  }
  getComment(): Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(this.url)
  }
  getSigleComment(id: number): Observable<IComment>{
    return this.httpClient.get<IComment>(this.url + '/' + id);
  }
}