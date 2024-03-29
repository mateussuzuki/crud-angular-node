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
import { BrandPageComponent } from './components/brand-crud/brand-page.component';
import { ModalColorComponent } from './components/modal-color/modal-color.component';
import { ModalBrandComponent } from './components/modal-brand/modal-brand.component';
import { ButtonPaginationComponent } from './components/button-pagination/button-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    CrudPageComponent,
    ModalComponent,
    ColorCrudComponent,
    BrandPageComponent,
    ModalColorComponent,
    ModalBrandComponent,
    ButtonPaginationComponent,
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
