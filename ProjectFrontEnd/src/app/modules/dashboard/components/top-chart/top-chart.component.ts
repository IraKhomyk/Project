import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { userWithAchievements } from 'src/app/models/user-with-achievements.model';
import { OtherUserProfileComponent } from '../other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  showInitials = false;
  total = 0;
  maxWidth = 580;

  usersWithAchiv: Array<userWithAchievements> = [
    { firstName: "Ira", lastName: "Khomyk", xp: 600, color: 'rgb(92, 198, 206)', size: '', photoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg' },
    { firstName: "Diana", lastName: "Demydko", xp: 250, color: 'rgb(196, 127, 184)', size: '', photoUrl: '' },
    { firstName: "Tanya", lastName: "Gogina", xp: 200, color: 'rgb(243, 159, 33)', size: '', photoUrl: '' },
    { firstName: "Khrystya", lastName: "Radchenko", xp: 100, color: 'rgb(33, 243, 215)', size: '', photoUrl: '' },
    { firstName: "Karen", lastName: "Sarkisyan", xp: 500, color: ' rgb(243, 81, 81)', size: '', photoUrl: '' },
  ];

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.createGrafic();
  }

  createGrafic(): void {
    this.usersWithAchiv.forEach(element => {
      this.total += element.xp;
    });

    this.usersWithAchiv.forEach(element => {
      element.size = Math.round((element.xp * this.maxWidth) / this.total) + '%';
    });
  }

  otherProfile(): void {
    const dialogRef = this.dialog.open(OtherUserProfileComponent, {
      panelClass: 'say-thanks-container',
      width: '800px',
      height: '400px',
    })
  }
}


