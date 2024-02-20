
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"
import { catchError } from "rxjs/internal/operators/catchError";

@Injectable({
  providedIn: 'root'
})

export class CarColorService {

  private dbUrl = "cars"

  constructor(private http: HttpClient){}

  getAllCarColors() {
    return this.http.get(`${this.dbUrl}/color`)
  }

  deleteColor(id:any) {
    
    const params = new HttpParams().set('id', id)
    return this.http.delete(`${this.dbUrl}/color`, { params })
    
  }


}