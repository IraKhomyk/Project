import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { OtherUserProfileComponent } from 'src/app/shared/components/other-user-profile/other-user-profile.component';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {
  userId: string;

  constructor(
    public dialog: MatDialog,
    public readonly authUserService: AuthUserService,
    private readonly userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsersShortInfo();
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

  getAllUsersShortInfo(): void {
    this.userService.getAllUsersShortInfo().pipe(take(1)).subscribe(res => {
      console.log(res)
    });
  }
}
