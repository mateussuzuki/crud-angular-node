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

  orderByClass:string[] = [
    "bi bi-caret-down-fill", 
    "bi bi-caret-down", 
    "bi bi-caret-down", 
    "bi bi-caret-down"
  ];

  toggle:boolean = false
  action:string = "add"
  alert!:string
  deletedCar!:any
  editedCar!:any
  currentPag:number = 1
  totalPags!:number
  orderBy:string = 'id'
  typeOrder:string = ""


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
    this.carService.getAllCars(this.currentPag, pagSize, this.orderBy, this.typeOrder)
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

  changeOrderBy(type:string) {
    this.orderBy = type
    this.getCarsList()
  }

  toggleOrderByClass(by: number): void {
    if(this.orderByClass[by] == 'bi bi-caret-down-fill') {
      this.orderByClass[by] = 'bi bi-caret-up-fill'
      this.typeOrder = 'desc'
    } else {
      this.orderByClass = this.orderByClass.map(() => "bi bi-caret-down")
      this.orderByClass[by] = 'bi bi-caret-down-fill'
      this.typeOrder = ''
    }
    this.getCarsList()

  }

}
