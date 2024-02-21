import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarColorService } from 'src/app/services/carColor.service';

@Component({
  selector: 'app-modal-color',
  templateUrl: './modal-color.component.html',
  styleUrls: ['./modal-color.component.scss']
})
export class ModalColorComponent implements OnInit{


  constructor(private carColorService:CarColorService){}

  colors:Car[] = []

  dataColor = {
    color: ""
  }

  ngOnInit(): void {
    this.getCarsColorList()
  }

  @Input() action!:string
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();

  getCarsColorList() {
    this.carColorService.getAllCarColors()
    .subscribe((response:any) => {
      this.colors = response
    })
  }

  addCarColor() {
    this.carColorService.addCarColor(this.dataColor)
    .subscribe((response:any) => {
      this.colors = response
      this.toggleModal()
      this.inputData.emit()
    })
  }

  toggleModal() {
    this.toggle.emit()
  }




}
