import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AchievementServiceService } from 'src/app/shared/services/AchievementService/achievement-service.service';
import { UserServiceService } from 'src/app/shared/services/UserService/user-service.service';

@Component({
  selector: 'app-say-thanks',
  templateUrl: './say-thanks.component.html',
  styleUrls: ['./say-thanks.component.scss']
})
export class SayThanksComponent {

  constructor(
    public dialogRef: MatDialogRef<SayThanksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public readonly userService: UserServiceService,
    public readonly achievementService: AchievementServiceService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
