import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { LeaveMessaggeComponent } from 'src/app/shared/components/leave-messagge/leave-messagge.component';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.scss']
})
export class OtherUserProfileComponent implements OnInit {
  toUserId: string;

  constructor(
    public dialogRef: MatDialogRef<OtherUserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private readonly userService: UserService,
    public readonly authUserService: AuthUserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUserById();
  }

  thanks(id: string): void {
    const dialogRef = this.dialog.open(LeaveMessaggeComponent, {
      panelClass: 'leave-message-container',
      width: '450px',
      height: '250px',
      data: id,
    })
    this.toUserId = id;
  }

  close(): void {
    this.dialogRef.close();
  }

  getUserById(): void {
    this.userService.getUserById(this.data).pipe(take(1)).subscribe();
  }
}
