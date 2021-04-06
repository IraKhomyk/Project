import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userWithAchievements } from 'src/app/models/user-with-achievements.model';

@Component({
  selector: 'app-other-user-profile',
  templateUrl: './other-user-profile.component.html',
  styleUrls: ['./other-user-profile.component.scss']
})
export class OtherUserProfileComponent {
  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power' },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft corporate power' },
    { photoUrl: './../../../../assets/achiv7.jpg', name: 'Exoft skylark power' },
    { photoUrl: './../../../../assets/achiv8.jpg', name: 'Exoft skylark power' },
  ];

  users: Array<userWithAchievements> = [
    { firstName: "Ira", lastName: "Khomyk", xp: 600, color: 'rgb(92, 198, 206)', size: '', photoUrl: './../../../../assets/myphoto.jpg' },
  ];

  constructor(
    public dialogRef: MatDialogRef<OtherUserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
