import {Component,} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {IMovie} from 'src/app/interface';
import {MovieService} from "../../service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    movies: IMovie[];

    constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe(({page}) =>{
       this.movieService.getRandomMovies(page || 2).subscribe(value => {
            this.movies = value.results;
            })
        })
    }

    //constructor(private movieService: MovieService) {
    //}
    //ngOnInit(): void {
     //   this.movieService.getAllMovies().subscribe(value => this.movies = value.results)
  //  }

   }


