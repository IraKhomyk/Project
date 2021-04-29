import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Achievement } from '../../models/achievement';
import { RequestAchievement } from '../../models/request-achievement';
import { AllAchievementsService } from '../all-achievements/all-achievements.service';
import { UserAchievementsService } from '../user-achievements/user-achievements.service';

@Injectable({
  providedIn: 'root'
})
export class AchievementService {

  constructor(private readonly httpClient: HttpClient,
    private readonly userAchievementsService: UserAchievementsService,
    private readonly allAchievementsService: AllAchievementsService) { }

  getAllUserAchievements(): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(`${environment.apiUrl}profile/achievements`, { withCredentials: true })
      .pipe(tap(achievements => {
        this.userAchievementsService.achievements = achievements;
      }));
  }

  getLastUserAchievements(): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(`${environment.apiUrl}profile/last`, { withCredentials: true })
      .pipe(tap(achievements => {
        this.userAchievementsService.lastAchievements = achievements;
      }));
  }

  getAllAchievements(): Observable<Achievement[]> {
    return this.httpClient.get<Achievement[]>(`${environment.apiUrl}achievement`, { withCredentials: true })
      .pipe(tap(achievements => {
        this.allAchievementsService.achievements = achievements;
      }));
  }

  addRequest(achievementId: string, message: string): Observable<RequestAchievement> {
    const params = new HttpParams().set('achievementId', achievementId)
      .set("message", message);

    return this.httpClient.post<RequestAchievement>(`${environment.apiUrl}request-achievement?${params}`, { withCredentials: true })
      .pipe(tap(result => {
        this.userAchievementsService.requestAchievment = result;
      }))
  }
}
