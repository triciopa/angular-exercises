import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.scss']
})
export class CronComponent implements OnInit {

  counter: number;

  constructor() { 
    this.counter = 10;
  }  

  ngOnInit(): void {
    // let interval = setInterval(() => { 
    //   this.counter === 0
    //   ? clearInterval(interval)
    //   : this.counter--
    //  }, 1000);
  }

  onClick(): void {
    let interval = setInterval(() => { 
      this.counter === 0
      ? clearInterval(interval)
      : this.counter--
     }, 1000);
  }

}
