import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { SayThanksComponent } from '../say-thanks/say-thanks.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  user: User = {
    firstName: 'Dima',
    lastName: 'Khomyk',
    email: 'dima@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: '',
    badges: 6,
    exp: 120,
    color: 'rgb(40, 120, 224)',
  }

  constructor(public dialog: MatDialog) { }

  sayThanks(): void {
    const dialogRef = this.dialog.open(SayThanksComponent, {
      panelClass: 'say-thanks-container',
      width: '800px',
      height: '400px',
      data: {}
    })
  }
}
