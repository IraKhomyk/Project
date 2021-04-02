import { Component, OnInit, } from '@angular/core';
import { User } from '../../../../models/user.model';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {

  opened = false;

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  user: User = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: './../../../../assets/myphoto.jpg',
    badges: 4,
    exp: 80,
    color: 'rgb(92, 198, 206)',
  };
}
