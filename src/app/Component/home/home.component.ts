import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import {IGenres} from "../../interface";
import {MovieService} from "../../service";


@Component({
    selector: 'app-header',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    _colors = ['#3d3a3a', '#c3d9c3'];
    curBg = 0;
    form: FormGroup;
    searchValue: IGenres[];
    search: string;

    constructor(private movieService: MovieService, private formBuilder: FormBuilder,) {
        this._createForm();
    }

    _createForm(): void {
        this.form = this.formBuilder.group({
            search: new FormControl(null, [Validators.required])

        })

    }

    click() {
        let rawValue = this.form.getRawValue();
        console.log(rawValue)
        this.movieService.quest(rawValue.search).subscribe((value => {
            this.searchValue = value.results;
            this.form.reset()
        }))
    }

    backgroundColor() {
        document.body.style.background = this._colors[++this.curBg % this._colors.length];
    }

}








