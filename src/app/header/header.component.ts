import { Component, OnInit } from '@angular/core';
import { CommonService } from '../servises/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public commonService:CommonService) { }
  
  title = 'frontEnd-Project';

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];


  ngOnInit(): void {
  }

}
