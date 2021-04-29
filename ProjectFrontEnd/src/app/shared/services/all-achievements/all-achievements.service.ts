import { Injectable } from '@angular/core';
import { Achievement } from '../../models/achievement';

@Injectable({
  providedIn: 'root'
})
export class AllAchievementsService {
  achievements: Achievement[];
}