import { Component, OnInit } from '@angular/core';
import { userWithAchievements } from 'src/app/models/user-with-achievements.model';
type userShortInfo = Pick<userWithAchievements, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {

  users: Array<userShortInfo> = [
    { firstName: 'Ira', lastName: 'Khomyk', photoUrl: './../../../../assets/myphoto.jpg', color: 'lavander', },
    { firstName: 'Dima', lastName: 'Khomyk', photoUrl: '', color: 'rgb(196, 127, 184)' },
    { firstName: 'Diana', lastName: 'Demydko', photoUrl: '', color: 'gold' },
    { firstName: 'Coffee', lastName: 'Coffee', photoUrl: './../../../../assets/achiv1.jpg', color: 'lavander', },
    { firstName: 'Valuha', lastName: 'Ahahaha', photoUrl: '', color: 'rgb(196, 127, 184)' },
    { firstName: 'Leonardo', lastName: 'DiCaprio', photoUrl: '', color: 'gold' },
    { firstName: 'No', lastName: 'Name', photoUrl: '', color: 'lightblue' },
    { firstName: 'Who', lastName: 'I am', photoUrl: '', color: 'purple' },
  ]
}
