import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sum',
  templateUrl: './sum.component.html',
  styleUrls: ['./sum.component.scss']
})
export class SumComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  result: number;

  constructor() {
    this.num1 = 4;
    this.num2 = 12;
    this.result = 0;
   }
   
  ngOnInit(): void {
  }

  onClick(): number {
    return this.result = this.num1 + this.num2;    
  }

}
