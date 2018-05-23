import { Component, OnInit } from '@angular/core';
import { BurgerService } from '../burger.service';

@Component({
  selector: 'app-burger-list',
  templateUrl: './burger-list.component.html',
  styleUrls: ['./burger-list.component.css']
})
export class BurgerListComponent implements OnInit {

  burgers: any = [];

  constructor(private burgerService: BurgerService) { }

  async ngOnInit() {
    this.burgers = (await this.burgerService.all());
    console.log(this.burgers);

    setInterval(async () => {
      this.burgers = (await this.burgerService.all());
    }, 3000);
  }

}
