import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarBrandService } from 'src/app/services/carBrand.service';

@Component({
  selector: 'app-modal-brand',
  templateUrl: './modal-brand.component.html',
  styleUrls: ['./modal-brand.component.scss']
})
export class ModalBrandComponent {

  @Input() action!:string
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  // @Input() deletedColor!:number
  // @Input() editedColor!:number
  constructor(private carBrandService:CarBrandService){}
  
  dataBrand = {
    brand: ""
  }

  addBrand() {  
    this.carBrandService.addBrand(this.dataBrand)
    .subscribe((response:any) => {
      this.toggleModal()
      this.inputData.emit()
    })
  }


  toggleModal() {
    this.toggle.emit()
  }





}
