export class Task {

  title: string;
  description: string;

  constructor(pTitle = '', pDescription = '') {
    this.title = pTitle;
    this.description = pDescription
  }
}