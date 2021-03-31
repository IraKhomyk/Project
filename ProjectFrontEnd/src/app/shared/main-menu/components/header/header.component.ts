import { Component, OnInit } from '@angular/core';
import { userWithAchievements } from 'src/app/models/userWithAchievements.model';
type userShortInfo = Pick<userWithAchievements, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'frontEnd-Project';

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }
}


