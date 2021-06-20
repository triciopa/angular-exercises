import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {

  result: string;
  hasFinished: boolean;

  constructor() {
    this.result = '';
    this.hasFinished = false;
   }

  ngOnInit(): void {
  }

  onClick($event: any) {
    if (this.hasFinished) {
      this.result = $event.target.innerText;
      this.hasFinished = false  
    } else {
      this.result += $event.target.innerText;
    }
  }

  onResult() {
    this.result = eval(this.result);
    this.hasFinished = true;
  }

}
