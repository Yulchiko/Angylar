import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

import { IMovie, IQuest} from "../interface";
import { urls } from '../config';


@Injectable({
  providedIn: 'root'
})
export class MovieService {



  constructor( private httpClient:HttpClient) { }

  getAllMovies(): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movies)
  }

  getRandomMovies (page:number = 1):Observable<{page: number; results: IMovie[]}>{
    return this.httpClient.get<{page: number; results: IMovie[]}>(urls.movies, {params:{page}})
  }

  getSingleMovieData (id:string): Observable<IMovie>{
    return this.httpClient.get<IMovie>(`${urls.movie}/${id}`)
  }
  quest(params: string): Observable<IQuest> {
    return this.httpClient.get<IQuest>(`${urls.search}${params}`)
  }



}
