import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarColorService } from 'src/app/services/carColor.service';

@Component({
  selector: 'app-modal-color',
  templateUrl: './modal-color.component.html',
  styleUrls: ['./modal-color.component.scss']
})
export class ModalColorComponent{

  dataColor = {
    color: ""
  }
  
  constructor(private carColorService:CarColorService){}

  @Input() action!:string
  @Input() deletedColor!:number
  @Input() editedColor!:number
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  @Output() alert: EventEmitter<string> = new EventEmitter<string>();

  addCarColor() {
    this.carColorService.addCarColor(this.dataColor)
    .subscribe((response:any) => {
      this.toggleModal()
      this.inputData.emit()
    })
  }

  editColor() {
    this.carColorService.editCarColor(this.editedColor, this.dataColor)
    .subscribe((response:any) => {
    })
  }

  deleteColor() {
    this.carColorService.deleteColor(this.deletedColor)
    .subscribe((response:any) => {
      this.alert.emit("success")
      this.toggleModal()
      this.inputData.emit()
    },(error:any) => {
      this.alert.emit("error")
      this.toggleModal()
    })
  }

  toggleModal() {
    this.toggle.emit()
  }




}
