import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './main-page/main-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AppModule } from '../app.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  declarations: [
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ]
})
export class PageModule { }
