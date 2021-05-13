import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AchievementService } from 'src/app/shared/services/achievement-service/achievement.service';
import { UserAchievementsService } from 'src/app/shared/services/user-achievements/user-achievements.service';
import { RequestAchievementComponent } from '../../../../../shared/components/request-achievement/request-achievement.component';

@Component({
  selector: 'app-personal-achievements',
  templateUrl: './personal-achievements.component.html',
  styleUrls: ['./personal-achievements.component.scss']
})
export class PersonalAchievementsComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private readonly achievementService: AchievementService,
    readonly userAchievementsService: UserAchievementsService) { }

  ngOnInit(): void {
    this.getAllUserAchievements();
  }

  request(): void {
    const dialogRef = this.dialog.open(RequestAchievementComponent, {
      panelClass: 'request-model-container',
      width: '700px',
      height: '300px',
    });
  }

  getAllUserAchievements(): void {
    this.achievementService.getAllUserAchievements().pipe(take(1)).subscribe();
  }
}
