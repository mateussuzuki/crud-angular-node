import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/cars';
import { CarService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-brand-page',
  templateUrl: './brand-page.component.html',
  styleUrls: ['./brand-page.component.scss']
})
export class BrandPageComponent implements OnInit {
  brands:Car[] = []
  
  ngOnInit(): void {
    this.getCarsBrandList()
  }

  constructor(private carService:CarService){}
  
  
  getCarsBrandList() {
    this.carService.getAllCarsBrand()
    .subscribe((response:any) => {
      this.brands = response
    })
  }

}
