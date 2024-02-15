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

  deletedCar!:string

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsList()
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

  getCarsList() {
    this.carService.getAllCars()
    .subscribe((response:any) => {
      this.cars = response
      console.log(this.cars);
      
    })
  }


  addCar() {
    this.action = "add"
    this.toggleModal()
  }

  editCar() {
    this.action = "edit"
    this.toggleModal()
  }

  deleteCar(del:any) {
    this.deletedCar = del    
    this.action = "delete"
    this.toggleModal()
  }

}
