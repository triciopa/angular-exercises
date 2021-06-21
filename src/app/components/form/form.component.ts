import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/tasks.model'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  newTask: Task;

  @Output() createdTask: EventEmitter<Task>;

  constructor() {
    this.newTask = new Task();
    this.createdTask = new EventEmitter();
   }

  ngOnInit(): void {
  }

  onClick() {    
    this.createdTask.emit(this.newTask);
    this.newTask = new Task();
  }

}
