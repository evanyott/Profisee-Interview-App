import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public product: Product;

  constructor() {
    this.product = new Product('','', '', '','','','')
    this.product.name = Product.name;
  }

  ngOnInit(): void {
  }

}
