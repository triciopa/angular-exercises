import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { Task } from './models/tasks.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  numbers: number[];
  taskArray: Task[];
  foodArray: Product[];
  drinksArray: Product[];
  selectedProducts: Product[];

  constructor() {
    this.numbers = [1, 8, 45, 954];
    this.taskArray = [];
    this.selectedProducts = [];
    this.foodArray = [
      new Product('Cheese', 'https://www.culturesforhealth.com/learn/wp-content/uploads/2016/04/Homemade-Cheddar-Cheese-header.jpg', 10),
      new Product('Ham', 'https://patagonia.net/wp-content/uploads/2018/02/JamonCrudo.jpg', 25),
      new Product('Salami','https://static4.depositphotos.com/1001719/376/i/600/depositphotos_3768099-stock-photo-salami-sausage.jpg',18)
    ];
    this.drinksArray = [
      new Product('Coca-Cola','https://www.eluniverso.com/resizer/XDCSRrWf-mQVhi9fw2igV2hzPg8=/1005x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/6O3SHHDC55GTHHHGY4HAWTVD5A.jpg',8),
      new Product('Cinzano','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR877s_nLKltRC8nDK1hjTep9p2eiESKztFA&usqp=CAU',12),
      new Product('Johnnie Walker','https://static.turbosquid.com/Preview/2019/07/10__21_42_10/_Signature.jpg751237AD-B221-45BD-905C-EC3CDF0A7D89Large.jpg',18)
    ];
  }

  onFinish($event: any) {
    console.log($event)
  }

  onCreatedTask($event: any) {
    this.taskArray.push($event);
    // console.log(this.taskArray);
  }

  onSelected($event: any) {
    // this.selectedProducts.push($event);
    const found = this.selectedProducts.find(product => product.name === $event.name);

    if (found) {
      found.q = found.q + 1;      
    } else {
      $event.q = 1;
      this.selectedProducts.push($event);
    }

  }
}
