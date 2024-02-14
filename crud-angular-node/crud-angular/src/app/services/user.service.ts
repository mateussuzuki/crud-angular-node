
import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private dbUrl = "users"

  constructor(private http: HttpClient){}

  getAllUsers() {
    return this.http.get(`${this.dbUrl}`)
  }

  addUser(data:any) :any {
    return this.http.put(`${this.dbUrl}`, data)
  }


}

