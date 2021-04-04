import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestAchievementComponent } from '../request-achievement/request-achievement.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {
  message: string;

  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv2.jpg', name: 'Exoft turbo power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv3.jpg', name: 'Exoft corporate power', time: '0 min ago', ex: '15 px', },
    { photoUrl: './../../../../assets/achiv4.jpg', name: 'Exoft skylark power', time: '0 min ago', ex: '15 px', },
  ];

  constructor(public dialog: MatDialog) { }

  request(): void {
    const dialogRef = this.dialog.open(RequestAchievementComponent, {
      panelClass: 'request-model-container',
      width: '700px',
      height: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result;
    });
  }
}
