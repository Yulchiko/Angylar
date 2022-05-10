import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {GenreService, MovieService} from "../../service";
import {IGenres, IMovie} from "../../interface";

@Component({
    selector: 'app-full-movie',
    templateUrl: './full-movie.component.html',
    styleUrls: ['./full-movie.component.css']
})
export class FullMovieComponent {
    movie: IMovie;
    genres: IGenres[];
    _colors = ['#3d3a3a', '#c3d9c3'];
    curBg = 0;

    constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private genreService: GenreService) {
        this.activatedRoute.params.subscribe(({id}) => {
            this.movieService.getSingleMovieData(id).subscribe(data => this.movie = data)
        })
    }

     backgroundColor() {
        document.body.style.background = this._colors[++this.curBg % this._colors.length];
    }

}
