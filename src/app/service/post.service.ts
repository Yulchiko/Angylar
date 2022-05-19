import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { IPostInterface } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor( private httpClient:HttpClient) {


  }
  getPosts(): Observable<IPostInterface[]>{
    return this.httpClient.get<IPostInterface[]>(this.url)
  }
  getSiglePost(id: number): Observable<IPostInterface>{
    return this.httpClient.get<IPostInterface>(this.url + '/' + id);
  }
}