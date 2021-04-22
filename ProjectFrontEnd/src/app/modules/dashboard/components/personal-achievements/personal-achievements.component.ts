import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AchievementServiceService } from 'src/app/shared/services/AchievementService/achievement-service.service';
import { RequestAchievementComponent } from '../../../../shared/components/request-achievement/request-achievement.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent {

  constructor(public dialog: MatDialog,
    public readonly achievementServiceService: AchievementServiceService) { }

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
