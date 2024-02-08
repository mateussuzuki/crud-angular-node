import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private dbUrl = "http://localhost:3000/users"

  constructor(private http: HttpClient){}


  verifyAccount(data:any) {

    const params = new HttpParams()
    .set('login', data.login)
    .set('password', data.password)

    return this.http.get(`${this.dbUrl}/verify`, { params })
    // return this.http.post(`${this.dbUrl}/verify`, data)
  }
}
