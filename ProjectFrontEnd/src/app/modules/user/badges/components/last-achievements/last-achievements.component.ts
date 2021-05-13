import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { RequestAchievementComponent } from 'src/app/shared/components/request-achievement/request-achievement.component';
import { AchievementService } from 'src/app/shared/services/achievement-service/achievement.service';
import { UserAchievementsService } from 'src/app/shared/services/user-achievements/user-achievements.service';

@Component({
  selector: 'app-last-achievements',
  templateUrl: './last-achievements.component.html',
  styleUrls: ['./last-achievements.component.scss']
})
export class LastAchievementsComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private readonly achievementService: AchievementService,
    readonly userAchievementsService: UserAchievementsService) { }

  ngOnInit(): void {
    this.getLastUserAchievements();
  }

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

  getLastUserAchievements(): void {
    this.achievementService.getLastUserAchievements().pipe(take(1)).subscribe();
  }
}
