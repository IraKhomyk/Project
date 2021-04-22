import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';
import { OtherUserProfileComponent } from '../other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  showInitials = false;
  total = 0;
  maxWidth = 450;

  constructor(
    public dialog: MatDialog,
    public readonly userServiceService: UserServiceService) { }

  ngOnInit(): void {
    this.createGrafic();
  }

  createGrafic(): void {
    this.userServiceService.usersWithAchivements.forEach(element => {
      this.total += element.xp;
    });

    this.userServiceService.usersWithAchivements.forEach(element => {
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


