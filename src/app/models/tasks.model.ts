export class Task {

  title: string;
  description: string;
  completed: boolean;

  constructor(pTitle = '', pDescription = '') {
    this.title = pTitle;
    this.description = pDescription
    this.completed = false;
  }
}