import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudPageComponent } from './components/crud-page/crud-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ColorCrudComponent } from './components/color-crud/color-crud.component';
import { BrandPageComponent } from './components/brand-crud/brand-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'crud', component: CrudPageComponent },
  { path: 'color', component: ColorCrudComponent },
  { path: 'brand', component: BrandPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
