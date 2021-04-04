import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  message: string;
}

@Component({
  selector: 'app-request-achievement',
  templateUrl: './request-achievement.component.html',
  styleUrls: ['./request-achievement.component.scss']
})
export class RequestAchievementComponent {
  message: string;

  achievement = 'Achievement';

  selected = 'Achievement';
  
  constructor(
    public dialogRef: MatDialogRef<RequestAchievementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
