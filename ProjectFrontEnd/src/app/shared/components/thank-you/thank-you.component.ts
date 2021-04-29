import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { OtherUserProfileComponent } from '../other-user-profile/other-user-profile.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {
  userId: string;

  constructor(public dialog: MatDialog,
    private readonly userService: UserService,
    readonly authUserService: AuthUserService) { }

  ngOnInit(): void {
    this.getLastThank();
  }

  sayThanks(id: string): void {
    const dialogRef = this.dialog.open(OtherUserProfileComponent, {
      panelClass: 'say-thanks-container',
      width: '800px',
      height: '400px',
      data: id,
    })
    this.userId = id;
  }

  getLastThank(): void {
    this.userService.getLastThank().pipe(take(1)).subscribe();
  }
}
