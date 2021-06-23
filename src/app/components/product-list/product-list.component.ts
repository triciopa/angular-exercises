import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() title: string;
  @Input() products: Product[];
  @Output() selected: EventEmitter<Product>;

  constructor() {
    this.title = '';
    this.products = [];
    this.selected = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClick(pProduct: any) {
    this.selected.emit(pProduct);
  }

}
