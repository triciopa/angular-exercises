import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() tasks: Task[];

  constructor() {
    this.tasks = [];
   }

  ngOnInit(): void {
  }

  showTasks() {
    let result = '<ul>';

    for (const task of this.tasks) {
      result += `<li>${task.title} - ${task.description}</li>`
    }

    result += '</ul>';
    return result;

  }

  onClick(pTask: Task) {
    pTask.completed = !pTask.completed;
  }

  onErase(pIndex: number) {
    this.tasks.splice(pIndex, 1);
  }

}
