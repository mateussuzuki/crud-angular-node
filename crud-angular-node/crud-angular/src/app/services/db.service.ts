import { Injectable } from "@angular/core"; 
import { HttpClient, HttpParams } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class DbService {
  private dbUrl = "users"

  constructor(private http: HttpClient){}

  
  createAccount(data:any) {
    
    // const params = new HttpParams()
    // .set('login', data.login)
    // .set('password', data.password)    
    // return this.http.get(`${this.dbUrl}`, { params })
    //  console.log(data);
    // console.log(data);
    
    return this.http.post(`${this.dbUrl}`, data)
  }

}
