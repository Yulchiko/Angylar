import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {GenreService, MovieService} from "./service";
import {FullMovieComponent, HomeComponent, MoviesComponent} from "./Component";


let routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '', redirectTo: 'movies', pathMatch: 'full'},
    {path: 'movies', component: MoviesComponent},
    {path: 'movies/:id', component: FullMovieComponent},
   ];


@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule
      ],
    exports: [RouterModule],
    providers: [
        MovieService,
        GenreService
    ]
})
export class AppRoutingModule {
}
