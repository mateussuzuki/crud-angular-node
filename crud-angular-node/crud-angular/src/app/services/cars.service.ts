
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private dbUrl = "cars"

  constructor(private http: HttpClient){}

  getAllCars(page:number, pageSize:number, orderBy:string, typeOrder:string) {
    return this.http.get(`${this.dbUrl}/getPagination?pag=${page}&pagSize=${pageSize}&orderBy=${orderBy}&typeOrder=${typeOrder}`)
  }

  addCar(data:any) {
    return this.http.post(`${this.dbUrl}`, data)
  }

  editCar(id:any, edit:any) {
    return this.http.put(`${this.dbUrl}/${id}?id=${id}`, edit);
  }

  
  deleteCar(del:any) {    
    const params = new HttpParams().set('id', del)
    return this.http.delete(`${this.dbUrl}`, { params })
  }


}

