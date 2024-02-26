import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/interfaces/cars';
import { CarBrandService } from 'src/app/services/carBrand.service';
import { CarColorService } from 'src/app/services/carColor.service';
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

  colors!:Car[]
  brands!:Car[]

  
  @Input() action!:string
  @Input() deletedCar!:string
  @Input() editedCar!:string
  
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() inputData: EventEmitter<void> = new EventEmitter<void>();
  
  ngOnInit(): void {
    this.getCarsBrandList()
  }

  constructor(
    private carService: CarService, 
    private carColorService: CarColorService,
    private carBrandService: CarBrandService,
    private router: Router){}

  addCar() {
    this.carService.addCar(this.dataCar)
    .subscribe((response:any) => {
      this.inputData.emit()
      this.toggleModal()
    })
  }

  editCar() {
    this.carService.editCar(this.editedCar ,this.dataCar)
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

  getCarsBrandList() {
    this.carBrandService.getAllCarsBrand()
    .subscribe((response:any) => {
      this.brands = response
    })
  }

  addColor() {
    this.router.navigate(["/color"])
  }

  addBrand() {
    this.router.navigate(["/brand"])
  }

  toggleModal() {
    this.toggle.emit()
  }

}
