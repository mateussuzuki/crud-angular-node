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
  alert!:boolean

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
      window.alert("Cor apagada com sucesso")
    },(error:any) => {
      this.alert = !this.alert
      
    })
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

}
