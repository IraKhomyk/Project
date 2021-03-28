import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from '../../models/user.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  // @Input() public photoUrl: string;
  // @Input() public name: string;

  constructor(public commonService:CommonService){}

  public showInitials = false;
  public initials: string;
  public circleColor: string;
  public opened=false;
  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];


  private colors = [
    '#EB7181',
    '#468547',
    '#FFD558',
    '#3670B2',
  ]

  public user: User = {
    name: 'Ira Khomyk',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: 'https://avatars.githubusercontent.com/u/80851018?s=460&u=6885306bba64e3178299355a954089fa904f837a&v=4',
    badges: 4,
    exp: 80
  };


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
