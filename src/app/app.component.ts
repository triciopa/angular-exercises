import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers: number[];

  constructor() {
    this.numbers = [1, 8, 45, 954];
  }

  onFinish($event: any) {
    console.log($event)
  }
}
