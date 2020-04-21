import { Component, OnInit } from '@angular/core';
import {products} from './product-list';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  allProducts = products;
  isGridView = true;


  toggleGrid(gridView) {
    this.isGridView = !gridView;
  }

  sort(val) {
    this.allProducts = this.allProducts.sort((a, b) => {
      return (val === 'lth') ? (a.price - b.price) : (b.price - a.price);
    });
  }
}
