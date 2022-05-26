import {Component, OnInit} from '@angular/core';
import {CarService} from "../../service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICarInterface} from "../../interface";
import { RegEx } from 'src/app/constant';

@Component({
    selector: 'app-car-model',
    templateUrl: 'car-model.component.html',
    styleUrls: ['./car-model.component.css']
})
export class CarModelComponent implements OnInit {
    cars: ICarInterface[];
    form: FormGroup;
    carForUpdate: ICarInterface | null;

    constructor(private carService: CarService) {
        this._creteForm()
    }

    ngOnInit(): void {
        this.carService.getCar().subscribe(value => this.cars = value)
    }

    save(): void {
        if (!this.carForUpdate) {
            this.carService.create(this.form.value).subscribe(value => {
                this.cars.push(value)
                this.form.reset()
            })
        } else {
            this.carService.updateById(this.carForUpdate.id, this.form.value).subscribe(value => {
                const updateCar = this.cars.find(f => f.id === this.carForUpdate?.id);
                Object.assign(updateCar, value)
                this.carForUpdate = null
            })
        }
    }

    delete(id: number): void {
        this.carService.deleteById(id).subscribe(() => {
            const index = this.cars.findIndex(car => car.id === id);
            this.cars.splice(index, 1)
        })
    }

    _creteForm(): void {
        this.form = new FormGroup({
            model: new FormControl(null, [Validators.pattern(RegEx.model)]),
            year: new FormControl(1990, [Validators.min(1990), Validators.max(new Date().getFullYear())]),
            price: new FormControl(0, [Validators.min(0), Validators.max(1000000)])
        })
    }

    update(car: ICarInterface): void {
        this.carForUpdate = car
        this.form.setValue({model: car.model, year: car.year, price: car.price})
    }
}