import { Component } from '@angular/core';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent {
  achievements = [
    { photoUrl: './../../../../assets/achiv5.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv7.jpg', name: 'Exoft corporate power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv8.jpg', name: 'Exoft skylark power', time: '0 min ago', ex: '15 px', },
  ];

}
