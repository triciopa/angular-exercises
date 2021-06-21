import { Component } from '@angular/core';
import { Task } from './models/tasks.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  numbers: number[];
  taskArray: Task[];

  constructor() {
    this.numbers = [1, 8, 45, 954];
    this.taskArray = [];
  }

  onFinish($event: any) {
    console.log($event)
  }

  onCreatedTask($event: any) {
    this.taskArray.push($event);
    console.log(this.taskArray);
  }
}
