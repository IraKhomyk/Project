import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RequestAchievementComponent } from 'src/app/modules/dashboard/components/request-achievement/request-achievement.component';
import { AchievementServiceService } from 'src/app/services/AchievementService/achievement-service.service';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent {

  constructor(public dialog: MatDialog,
    public achievementService: AchievementServiceService) { }

  request(): void {
    const dialogRef = this.dialog.open(RequestAchievementComponent, {
      panelClass: 'request-model-container',
      width: '700px',
      height: '300px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
