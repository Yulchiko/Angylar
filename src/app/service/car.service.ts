import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICarInterface} from '../interface';
import { urls } from '../constant';



@Injectable({
  providedIn: 'root'
})
export class CarService {
  car:ICarInterface;
  cars: ICarInterface[]

  constructor(private httpClient: HttpClient) { }


  getCarById(id:number): Observable<ICarInterface> {
    return this.httpClient.get<ICarInterface>(`${urls.cars}/${id}`);
  }

  getCar(): Observable<ICarInterface[]>{
    return this.httpClient.get<ICarInterface[]>(urls.cars)
  }
  create(car: ICarInterface): Observable<ICarInterface> {
    return this.httpClient.post<ICarInterface>(urls.cars, car)
  }
  deleteById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${urls.cars}/${id}`)
  }

  updateById(id: number, carForUpdate: Partial<ICarInterface>): Observable<ICarInterface> {
    return this.httpClient.patch<ICarInterface>(`${urls.cars}/${id}`, carForUpdate)
  }
}