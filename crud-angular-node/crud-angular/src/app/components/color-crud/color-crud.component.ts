import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarColorService } from 'src/app/services/carColor.service';
import { CarService } from 'src/app/services/cars.service'; 


@Component({
  selector: 'app-color-crud',
  templateUrl: './color-crud.component.html',
  styleUrls: ['./color-crud.component.scss']
})
export class ColorCrudComponent implements OnInit{

  colors:Car[] = []

  toggle:boolean = false

  action:string = ""


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
    this.action = "add"
    this.toggleModal()
  }

  deleteColor(del:number) {
    this.carColorService.deleteColor(del)
    .subscribe((response:any) => {
      this.getCarsColorList()
    },(error:any) => {
      window.alert(JSON.stringify(error.error.error))
    })
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

}
