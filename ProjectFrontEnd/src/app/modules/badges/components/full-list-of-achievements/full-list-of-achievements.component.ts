import { Component } from '@angular/core';
import { AchievementServiceService } from 'src/app/services/AchievementService/achievement-service.service';

@Component({
  selector: 'app-full-list-of-achievements',
  templateUrl: './full-list-of-achievements.component.html',
  styleUrls: ['./full-list-of-achievements.component.scss']
})
export class FullListOfAchievementsComponent {

  constructor(public readonly achievementService: AchievementServiceService) { }
}
