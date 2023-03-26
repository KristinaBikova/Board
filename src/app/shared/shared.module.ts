import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    MenuComponent,
    NavbarComponent,
    ProductComponent
  ],
  exports: [
    MenuComponent,
    NavbarComponent,
    ProductComponent,
    HttpClientModule
  ]
})
export class SharedModule { }
