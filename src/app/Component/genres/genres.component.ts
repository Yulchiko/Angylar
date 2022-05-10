import {Component} from '@angular/core';

import {IGenres} from 'src/app/interface';
import {GenreService} from 'src/app/service';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.css']
})
export class GenresComponent {
    genres: IGenres[];

    constructor(private genreService: GenreService) {
    }

    ngOnInit(): void {
        this.genreService.getRandom().subscribe(value => this.genres = value.genres)
    }
}



