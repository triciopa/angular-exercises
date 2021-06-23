import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.scss']
})
export class ProductOrderComponent implements OnInit {

  @Input() productArray: Product[];

  constructor() {
    this.productArray = [];
   }

  ngOnInit(): void {
  }

  sumTotal() {
    let result = 0;

    for (let product of this.productArray) {
      result += product.price * product.q;
    }

    return result;
  }

  onClick(index: number) {
    if (this.productArray[index].q === 1) {
      this.productArray.splice(index, 1)
    } else {
      this.productArray[index].q--;
    }    
  }

}
