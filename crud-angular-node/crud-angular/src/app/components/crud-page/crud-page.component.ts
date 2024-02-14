import { Component } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent {

  cars: Car[] = []

  toggle: boolean = false
  action:string = "add"

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsList()
  }

  getCarsList() {
    this.carService.getAllCars()
    .subscribe((response:any) => {
      this.cars = response
    })
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

  editCar() {
    this.action = "edit"
    this.toggleModal()
  }

}
