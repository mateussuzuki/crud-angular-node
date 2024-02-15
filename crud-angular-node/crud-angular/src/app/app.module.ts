import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { CrudPageComponent } from './components/crud-page/crud-page.component';
import { ModalComponent } from './components/modal/modal.component';
import { ColorCrudComponent } from './components/color-crud/color-crud.component';
import { BrandPageComponent } from './components/brand-page/brand-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CrudPageComponent,
    ModalComponent,
    ColorCrudComponent,
    BrandPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
