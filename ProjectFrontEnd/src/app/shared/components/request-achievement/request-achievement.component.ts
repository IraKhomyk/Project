import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { AchievementService } from '../../services/achievement-service/achievement.service';
import { AllAchievementsService } from '../../services/all-achievements/all-achievements.service';

@Component({
  selector: 'app-request-achievement',
  templateUrl: './request-achievement.component.html',
  styleUrls: ['./request-achievement.component.scss']
})
export class RequestAchievementComponent implements OnInit {

  selectAchievement = 'Achievement';

  requestForm: FormGroup = new FormGroup({
    "achievement": new FormControl("", Validators.required),
    "message": new FormControl("", Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<RequestAchievementComponent>,
    readonly allAchievementsService: AllAchievementsService,
    private readonly achievementService: AchievementService) { }

  ngOnInit(): void {
    this.getAllAchievements();
  }

  close(): void {
    this.dialogRef.close();
  }

  getAllAchievements(): void {
    this.achievementService.getAllAchievements()
      .pipe(take(1)).subscribe();
  }

  addRequest(): void {
    this.achievementService.addRequest(this.requestForm.value.achievement, this.requestForm.value.message)
      .pipe(take(1)).subscribe(res => {
        this.dialogRef.close();
      }, err => {
        alert(err && err.error);
      });
  }
}
