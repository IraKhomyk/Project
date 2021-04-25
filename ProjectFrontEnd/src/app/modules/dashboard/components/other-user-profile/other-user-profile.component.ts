import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AchievementServiceService } from 'src/app/shared/services/AchievementService/achievement-service.service';
import { UserServiceService } from 'src/app/shared/services/UserServiceMock/user-service.service';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.scss']
})
export class OtherUserProfileComponent {

  constructor(
    public dialogRef: MatDialogRef<OtherUserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public readonly userServiceService: UserServiceService,
    public readonly achievementServiceService: AchievementServiceService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
