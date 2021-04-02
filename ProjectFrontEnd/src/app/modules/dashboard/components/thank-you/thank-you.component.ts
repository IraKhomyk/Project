import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  user: User = {
    firstName: 'Dima Khomyk',
    lastName: 'Khomyk',
    email: 'dima@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: '',
    badges: 6,
    exp: 120,
    color: 'rgb(40, 120, 224)',
  }

}
