import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3N2VlMDU1MmJhNzY1YjYyMGIwZTc4YjUxNGFmZmQzMyIsInN1YiI6IjYyOTUwMzBhZjU0ODM2MDA1MDZkOGE0YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AkFe-BBh34dSuuDkxKRyPzLI3lqoDYA4pjuQ93n0-bw'
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        Authorization:`Bearer ${this._token}`
      }
    })
    return next.handle(request);
  }
}
