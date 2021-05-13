import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { OtherUserProfileComponent } from '../../../../../shared/components/other-user-profile/other-user-profile.component';
import { take } from 'rxjs/operators';
import { Roles } from 'src/app/shared/enums/roles';

@Component({
  selector: 'app-top-chart',
  templateUrl: './top-chart.component.html',
  styleUrls: ['./top-chart.component.scss']
})
export class TopChartComponent implements OnInit {
  userId: string;

  constructor(
    public dialog: MatDialog,
    public readonly authUserService: AuthUserService,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  otherProfile(id: string): void {
    const dialogRef = this.dialog.open(OtherUserProfileComponent, {
      panelClass: 'say-thanks-container',
      width: '800px',
      height: '400px',
      data: id,
    })
    this.userId = id;
  }

  getAllUsers(): void {
    this.userService.getAllUsers().pipe(take(1)).subscribe();
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return "#" + ("000000" + color).slice(-6);
  }
}
