import { Component, OnInit } from '@angular/core';
import { userWithAchievements } from 'src/app/models/userWithAchievements.model';
type userShortInfo = Pick<userWithAchievements, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  title = 'frontEnd-Project';
  routers = [{
    link: '/dashboard',
    name: 'Dashboard'
  },
  {
    link: '/badges',
    name: 'Badges'
  },
  {
    link: '/orders',
    name: 'Orders'
  }
  ];
  
  activeLink = this.routers[0];

  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }

  constructor() { }

  ngOnInit(): void {
  }
}


