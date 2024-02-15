import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  dataCar = {
    name: "",
    brand: "",
    color: ""
  }

  
  @Input() action!:string

  @Input() deletedCar!:string
  
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  

  constructor(private carService: CarService, private router: Router){}
  
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
