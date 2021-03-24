import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  // @Input() public photoUrl: string;
  // @Input() public name: string;

  public showInitials = false;
  public initials: string;
  public circleColor: string;

  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2',
  ]

  user: User = {
    name: 'Ira Khomyk',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: ''
  };
  constructor() { }

  ngOnInit() {
    if (!this.user.photoUrl) {
      this.showInitials = true;
      this.createInitials();

      const randomIndex = Math.floor(Math.random() * Math.floor(this.colors.length));
      this.circleColor = this.colors[randomIndex];
    }
  }

  private createInitials(): void {
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
