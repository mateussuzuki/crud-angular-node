import { Component } from '@angular/core';
import { DbService } from 'src/app/services/db.service'; 

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent  {

  formData = {
    login: "",
    password: "",
  }

  constructor(private dbService: DbService) {}

  verifyAccountDB(data:any) {
    this.dbService.createAccount(data)
    .subscribe((response:any) => {
      console.log(response);
      
    })
  }

  login() {
    console.log(this.formData.login);
    console.log(this.formData.password); 
    this.verifyAccountDB(this.formData)
  }
}
