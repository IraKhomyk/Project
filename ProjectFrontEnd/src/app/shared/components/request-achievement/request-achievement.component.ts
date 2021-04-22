import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-request-achievement',
  templateUrl: './request-achievement.component.html',
  styleUrls: ['./request-achievement.component.scss']
})
export class RequestAchievementComponent {
  selectAchievement = 'Achievement';

  requestForm: FormGroup = new FormGroup({
    "achievement": new FormControl(),
    "message": new FormControl("", Validators.required),
  });

  constructor(
    public dialogRef: MatDialogRef<RequestAchievementComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  send(): void {
    if (this.requestForm.valid) {
      this.dialogRef.close();
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
