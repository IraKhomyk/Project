import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv2.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv3.jpg', name: 'Exoft corporate power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv4.jpg', name: 'Exoft skylark power', time: '0 min ago', ex: '15 px', },
  ]

}
