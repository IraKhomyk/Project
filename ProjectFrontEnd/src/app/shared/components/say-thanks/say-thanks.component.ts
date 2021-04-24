import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AchievementServiceService } from 'src/app/shared/services/AchievementService/achievement-service.service';
import { UserServiceService } from 'src/app/shared/services/UserService/user-service.service';
import { LeaveMessaggeComponent } from '../leave-messagge/leave-messagge.component';

@Component({
  selector: 'app-say-thanks',
  templateUrl: './say-thanks.component.html',
  styleUrls: ['./say-thanks.component.scss']
})
export class SayThanksComponent {
  dialogValue: string;
  
  constructor(
    public dialogRef: MatDialogRef<SayThanksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public readonly userService: UserServiceService,
    public readonly achievementService: AchievementServiceService,
    public dialog: MatDialog,) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  thanks(): void {
    const dialogRef = this.dialog.open(LeaveMessaggeComponent, {
      panelClass: 'leave-message-container',
      width: '450px',
      height: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.data = result.data;
    });
  }

}
