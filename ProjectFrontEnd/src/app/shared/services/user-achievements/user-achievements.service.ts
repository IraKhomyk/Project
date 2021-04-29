import { Injectable } from '@angular/core';
import { Achievement } from '../../models/achievement';
import { RequestAchievement } from '../../models/request-achievement';

@Injectable({
  providedIn: 'root'
})
export class UserAchievementsService {
  achievements: Achievement[];

  lastAchievements: Achievement[];

  requestAchievment: RequestAchievement;
}
