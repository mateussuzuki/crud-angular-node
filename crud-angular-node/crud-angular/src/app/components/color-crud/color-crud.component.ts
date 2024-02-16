import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarService } from 'src/app/services/cars.service'; 


@Component({
  selector: 'app-color-crud',
  templateUrl: './color-crud.component.html',
  styleUrls: ['./color-crud.component.scss']
})
export class ColorCrudComponent implements OnInit{

  colors:Car[] = []


  ngOnInit(): void {
    this.getCarsColorList()
  }

  constructor(
    private carService:CarService){}

  getCarsColorList() {
    this.carService.getAllCarColors()
    .subscribe((response:any) => {
      this.colors = response
      
    })
  }

}
