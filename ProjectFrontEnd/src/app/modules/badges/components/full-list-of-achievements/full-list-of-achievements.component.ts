import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AchievementService } from 'src/app/shared/services/achievement-service/achievement.service';
import { UserAchievementsService } from 'src/app/shared/services/user-achievements/user-achievements.service';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent implements OnInit {

  constructor(private readonly achievementService: AchievementService,
    readonly userAchievementsService: UserAchievementsService) { }

  ngOnInit(): void {
    this.getAllUserAchievements();
  }

  getAllUserAchievements(): void {
    this.achievementService.getAllUserAchievements().pipe(take(1)).subscribe();
  }
}
