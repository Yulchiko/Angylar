import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

import {IGenres} from "../interface";
import { urls } from '../config';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient:HttpClient) { }

  getRandomGenres(name: string): Observable<{name:string; results :IGenres[]}>{
    return this.httpClient.get<{name:string; results :IGenres[]}>(urls + '/genre/movie/list')
  }
   getRandom(): Observable<IGenres> {
    return this.httpClient.get<IGenres >(urls.genres)
  }
  getSingleData(id:number):Observable<{id: number; results: IGenres}>{
    return this.httpClient.get<{id: number; results: IGenres}>(urls.genre +`${id}` + `/movies`)
  }
}
