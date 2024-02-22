
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})


export class CarBrandService {
  private dbUrl = "brands"

  constructor(private http: HttpClient){}

  addBrand(brand:any) {
    return this.http.post(`${this.dbUrl}`, brand)
  }

  deleteBrand(del:any) {
    const params = new HttpParams().set('id', del)
    return this.http.delete(`${this.dbUrl}`, { params })
  }
}