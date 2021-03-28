import { Component, OnInit } from '@angular/core';
import { UserInf } from '../../models/icon-user.model';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  title = 'frontEnd-Project';

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  public user: UserInf = { name: "Ira Khomyk", photoUrl: "" };

  ngOnInit(): void {
  }

}
