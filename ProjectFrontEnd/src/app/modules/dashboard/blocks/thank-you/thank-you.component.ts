import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  public user: User = {
    name: 'Dima Khomyk',
    lastName: 'Khomyk',
    email: 'dima@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: '',
    badges: 6,
    exp: 120
  }

  public showInitials = false;
  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2',
  ]
  constructor() { }

  ngOnInit() {
    if (!this.user.photoUrl) {
      this.showInitials = true;
      this.createInitials();

      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }
  }

  public createInitials(): void {
    let initials = "";

    for (let i = 0; i < this.user.name.length; i++) {
      if (this.user.name.charAt(i) === ' ') {
        continue;
      }

      if (this.user.name.charAt(i) === this.user.name.charAt(i).toUpperCase()) {
        initials += this.user.name.charAt(i);

        if (initials.length == 2) {
          break;
        }
      }
    }

    this.initials = initials;
  }

}
