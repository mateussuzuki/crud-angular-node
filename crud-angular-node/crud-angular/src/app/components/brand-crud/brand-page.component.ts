import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarBrandService } from 'src/app/services/carBrand.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {

  brands: Car[] = []
  toggle!: boolean
  editedBrandPlaceholder!:string
  action!: string
  idBrand!:number
  alert!:string
  typeAlert!:string

  ngOnInit(): void {
    this.getCarsBrandList()
  }

  constructor(
    private carBrandService:CarBrandService
    ) { }


  getCarsBrandList() {
    this.carBrandService.getAllCarsBrand()
      .subscribe((response: any) => {
        this.brands = response
      })
  }

  addBrand() {
    this.action = "Add"
    this.editedBrandPlaceholder = "brand"
    this.toggleModal()
  }

  editBrand(id:number, edit:string) {
    this.action = "Edit"
    this.idBrand = id
    this.editedBrandPlaceholder = edit
    this.toggleModal()
  }
 
  deleteBrand(id:number) {
    this.action = "Delete"
    this.idBrand = id
    this.toggleModal()
  }

  toggleModal() {
    this.toggle = !this.toggle
  }

  alertForDelete(alert:string) {
    this.alert = alert
    setTimeout(() => {
      this.alert = ""
    }, 1000)
  }



}
