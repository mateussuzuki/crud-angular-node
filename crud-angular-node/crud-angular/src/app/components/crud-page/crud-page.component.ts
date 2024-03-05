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
  alert!:string
  deletedCar!:any
  editedCar!:any
  currentPag:number = 1
  totalPags!:number

  constructor(private carService:CarService) { }

  ngOnInit(): void {
    this.getCarsList()
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

  getCarsList(currentPag:number = 1) {
    const pagSize = 10
    this.currentPag = currentPag
    this.carService.getAllCars(this.currentPag, pagSize)
    .subscribe((response:any) => {
      this.cars = response.data
      this.totalPags = Math.ceil(response.amount / pagSize)      
    })
  }

  addCar() {
    this.action = "Add"
    this.toggleModal()
  }

  editCar(edit:any) {
    this.editedCar = edit
    this.action = "Edit"
    this.toggleModal()
  }

  deleteCar(del:any) {
    this.deletedCar = del
    
    this.action = "Delete"
    this.toggleModal()
  }

  
  alertType(alert:string) {
    this.alert = alert
    setTimeout(() => {
      this.alert = ""
    }, 1500)
  }

}
