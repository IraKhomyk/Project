import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {
  user: User = {
    name: 'Ira Khomyk',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: 'https://avatars.githubusercontent.com/u/80851018?s=460&u=6885306bba64e3178299355a954089fa904f837a&v=4',
    badges: 4,
    exp: 80
  };
  constructor() { }
  public greet: string;

  ngOnInit() {
    this.getGreeting();
  }

  getGreeting(): void {
    var myDate = new Date();
    var hrs = myDate.getHours();

    if (hrs >= 5 && hrs <= 11) {
      this.greet = 'Good morning';

    }
    else if (hrs >= 12 && hrs <= 17) {
      this.greet = 'Good day';

    }
    else if (hrs >= 18 && hrs <= 23) {
      this.greet = 'Good evening';

    }
    else if (hrs >= 0 && hrs <= 5) {
      this.greet = 'Good night';
    }
  }
}
