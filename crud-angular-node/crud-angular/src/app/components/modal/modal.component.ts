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

  constructor(private carService: CarService){}
  
  addCar(data:any) {
    this.carService.addCar(data)
    .subscribe((response:any) => {
      this.inputData.emit()
    })
  }

  add() {
    this.addCar(this.dataCar)
  }


  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  

  toggleModal() {
    this.toggle.emit()
  }

}
