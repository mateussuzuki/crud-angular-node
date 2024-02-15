import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private dbUrl = "users"

  constructor(private http: HttpClient){}

  addUser(data:any) :any {
    return this.http.put(`${this.dbUrl}`, data)

  }
  createAccount(data:any) {

    return this.http.post(`${this.dbUrl}`, data)
  }

}
