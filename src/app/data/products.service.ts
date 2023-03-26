import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProductResponse } from '../interfece/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private _http: HttpClient ) { }

  getList():Observable<IProductResponse>{
   return this._http.get<IProductResponse>('https://fakerapi.it/api/v1/products?_quantity=12&_taxes=12&_categories_type=uuid')
  }
}