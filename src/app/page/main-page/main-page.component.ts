import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/data/products.service';
import { IProduct } from 'src/app/interfece/product';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  products: IProduct[] = [];

  constructor(private _productService: ProductsService) { }

  ngOnInit(): void {
    this._productService.getList()
    .subscribe((response) => {
      this.products = response.data;
    });
  }

}
