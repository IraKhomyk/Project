import { Component, OnInit, } from '@angular/core';
import { User } from '../../../../models/user.model';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {

  constructor(public commonService: CommonService) { }


  public opened = false;

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  public user: User = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: 'https://avatars.githubusercontent.com/u/80851018?s=460&u=6885306bba64e3178299355a954089fa904f837a&v=4',
    badges: 4,
    exp: 80,
    color:'rgb(92, 198, 206)',
  };

  ngOnInit() {
  }

}
