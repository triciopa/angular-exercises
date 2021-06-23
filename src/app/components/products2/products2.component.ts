import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product2 } from 'src/app/models/product2.model';

@Component({
  selector: 'app-products2',
  templateUrl: './products2.component.html',
  styleUrls: ['./products2.component.scss']
})
export class Products2Component implements OnInit {

  @Input() products: Product2[];
  @Input() buttonText: string;

  @Output() buyProduct: EventEmitter<number>;

  constructor() {
    this.products = [];
    this.buttonText = '';

    this.buyProduct = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick(index: number) {
    this.buyProduct.emit(index);
  }
}
