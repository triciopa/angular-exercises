import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cron',
  templateUrl: './cron.component.html',
  styleUrls: ['./cron.component.scss']
})
export class CronComponent implements OnInit {

  @Input() init: number;
  
  @Output() finish: EventEmitter<string>;
  
  counter: number;

  constructor() { 
    this.counter = 0;
    this.init = 10;
    this.finish = new EventEmitter();
  }  

  ngOnInit(): void {
    // THIS WOULD START THE COUNTDOWN ON RENDER
    // let interval = setInterval(() => { 
    //   this.counter === 0
    //   ? clearInterval(interval)
    //   : this.counter--
    //  }, 1000);

    this.counter = this.init ? this.init : 10;
  }

  onClick(): void {
    let interval = setInterval(() => { 
    //   this.counter === 0
    //   ? clearInterval(interval)      
    //   : this.counter--

      this.counter--;
      if (this.counter < 0) {
        clearInterval(interval);
        this.counter = this.init;
        this.finish.emit('Countdown finished with number: ' + this.init)
      }

     }, 1000);


  }

}
