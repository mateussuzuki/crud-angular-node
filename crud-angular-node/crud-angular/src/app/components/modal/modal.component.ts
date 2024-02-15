import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  dataCar = {
    name: ""
  }

  
  @Input() action!:string
  @Input() deletedCar!:string
  
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  

  constructor(private carService: CarService){}
  
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

  toggleModal() {
    this.toggle.emit()
  }

}
