import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'frontEnd-Project';

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  events: string[] = [];
  opened: boolean;
  

}
