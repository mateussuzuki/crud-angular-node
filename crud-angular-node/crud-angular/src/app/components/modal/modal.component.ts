import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/interfaces/cars';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit{

  dataCar = {
    name: "",
    brand: "",
    color: ""
  }

  colors:Car[] = []

  
  @Input() action!:string
  @Input() deletedCar!:string
  
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  
  ngOnInit(): void {
    this.getCarsColorList()
  }

  constructor(
    private carService: CarService, 
    private router: Router){}

  addCar() {
    this.carService.addCar(this.dataCar)
    .subscribe((response:any) => {
      this.inputData.emit()
      this.toggleModal()
    })
  }

  deleteCar() {
    this.carService.deleteCar(this.deletedCar)
    .subscribe((response:any) => {
      this.inputData.emit()
      this.toggleModal()
    })
  }

  getCarsColorList() {
    this.carService.getAllCarColors()
    .subscribe((response:any) => {
      this.colors = response
      
    })
  }

  addColor() {
    this.router.navigate(["/colors"])
  }

  addBrand() {
    this.router.navigate(["/brands"])
  }

  toggleModal() {
    this.toggle.emit()
  }

}
