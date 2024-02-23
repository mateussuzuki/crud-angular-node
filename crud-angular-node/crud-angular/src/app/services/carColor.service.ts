
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class CarColorService {

  private dbUrl = "colors"

  constructor(private http: HttpClient){}

  getAllCarColors() {
    return this.http.get(`${this.dbUrl}`)
  }

  addCarColor(color:any) {
    return this.http.post(`${this.dbUrl}`, color)
  }

  editCarColor(id:any, color:any) {
    return this.http.put(`${this.dbUrl}/${id}`, color)
  }

  deleteColor(id:any) {
    const params = new HttpParams().set('id', id)
    return this.http.delete(`${this.dbUrl}`, { params })
  }



}