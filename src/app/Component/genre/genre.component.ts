import {Component, Input, OnInit} from '@angular/core';

import {IGenres} from 'src/app/interface';


@Component({
    selector: 'app-genre',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
    @Input()
    genre: IGenres;

    constructor() {
    }

    ngOnInit(): void {

    }

}