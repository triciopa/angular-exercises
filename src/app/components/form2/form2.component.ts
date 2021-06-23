import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product2 } from '../../models/product2.model';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  @Output() createdProd: EventEmitter<Product2>;

  newProd: Product2;  

  constructor() {
    this.newProd = new Product2();
    this.createdProd = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick() {
    this.createdProd.emit(this.newProd);
    this.newProd = new Product2();
  }

}
