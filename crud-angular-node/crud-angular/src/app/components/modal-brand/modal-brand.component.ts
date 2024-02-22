import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CarBrandService } from 'src/app/services/carBrand.service';

@Component({
  selector: 'app-modal-brand',
  templateUrl: './modal-brand.component.html',
  styleUrls: ['./modal-brand.component.scss']
})
export class ModalBrandComponent {

  @Input() action!:string
  @Input() idBrand!:number
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() alert: EventEmitter<string> = new EventEmitter<string>();
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

  deleteBrand() {  
    this.carBrandService.deleteBrand(this.idBrand)
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
