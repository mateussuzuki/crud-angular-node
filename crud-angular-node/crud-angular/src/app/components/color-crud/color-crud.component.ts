import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarColorService } from 'src/app/services/carColor.service';



@Component({
  selector: 'app-color-crud',
  templateUrl: './color-crud.component.html',
  styleUrls: ['./color-crud.component.scss']
})
export class ColorCrudComponent implements OnInit{

  colors:Car[] = []
  toggle:boolean = false
  action:string = ""
  alert!:string
  idColor!:number
  editedColorPlaceholder!:string

  ngOnInit(): void {
    this.getCarsColorList()
  }

  constructor(
    private carColorService:CarColorService){}

  getCarsColorList() {
    this.carColorService.getAllCarColors()
    .subscribe((response:any) => {
      this.colors = response
    })
  }

  addColor() {
    this.action = "Add"
    this.editedColorPlaceholder = "color"
    this.toggleModal()
  }

  editCar(id:number, color:string) {
    this.action = "Edit"
    this.idColor = id
    this.editedColorPlaceholder = color
    this.toggleModal()
  }

  deleteColor(del:any) {
    this.action = "Delete"
    this.idColor = del
    this.toggleModal()
  }

  alertForDelete(alert:string) {
    this.alert = alert
    setTimeout(() => {
      this.alert = ""
    }, 1500)
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

}
