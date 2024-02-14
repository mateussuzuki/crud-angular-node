
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private dbUrl = "cars"

  constructor(private http: HttpClient){}

  getAllCars() {
    return this.http.get(`${this.dbUrl}`)
  }

  addCar(data:any):any {
    return this.http.post(`${this.dbUrl}`, data)
  }


}

