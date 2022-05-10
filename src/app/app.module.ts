import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppInterceptor} from './app.interceptor';
import {
    FullMovieComponent,
    GenreComponent,
    GenresComponent,
    HomeComponent,
    MovieComponent,
    MoviesComponent,
 } from "./Component";
import {AppRoutingModule} from "./app-routing.module";
import {GenreService, MovieService} from "./service";

@NgModule({
    declarations: [
        AppComponent,
        MovieComponent,
        MoviesComponent,
        HomeComponent,
        FullMovieComponent,
        GenresComponent,
        GenreComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    providers: [MovieService, GenreService, {
        provide: HTTP_INTERCEPTORS,
        multi: true,
        useClass: AppInterceptor,

    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}


