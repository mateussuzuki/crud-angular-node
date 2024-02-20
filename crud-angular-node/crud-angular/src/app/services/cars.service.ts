
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs";

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

  editCar(id: any, edit: any): any {
    return this.http.put(`${this.dbUrl}/${id}?id=${id}`, edit);
  }

  
  deleteCar(del:any):any{    
    const params = new HttpParams().set('id', del)
    return this.http.delete(`${this.dbUrl}`, { params })
  }

  // getAllCarColors() {
  //   return this.http.get(`${this.dbUrl}/color`)
  // }

  getAllCarsBrand() {
    return this.http.get(`${this.dbUrl}/brand`)
  }

}

