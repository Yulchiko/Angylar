import { Component, Input} from '@angular/core';

import {IGenres, IMovie} from "../../interface";
import {GenreService} from "../../service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input()
  movie: IMovie;
  genres: IGenres[];

  constructor(private genreService: GenreService) {
    this.genreService.getRandom().subscribe(value => {
      const mac = [] as IGenres[];
      for (let id of this.movie.genre_ids) {
        value.genres.map(genre => {
          if (id === genre.id) {
            mac.push(genre)
            console.log(genre)
          }
        });
        this.genres = mac;
      }
    })

  }
  }


