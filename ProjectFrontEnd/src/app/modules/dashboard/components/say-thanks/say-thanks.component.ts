import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-say-thanks',
  templateUrl: './say-thanks.component.html',
  styleUrls: ['./say-thanks.component.scss']
})
export class SayThanksComponent {
  user: User = {
    firstName: 'Dima',
    lastName: 'Khomyk',
    email: 'dima@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: '',
    badges: 6,
    exp: 120,
    color: 'rgb(114, 112, 112)',
  }

  achievements = [
    { photoUrl: './../../../../assets/achiv1.jpg', name: 'Exoft turbo power' },
    { photoUrl: './../../../../assets/achiv2.jpg', name: 'Exoft turbo power' },
    { photoUrl: './../../../../assets/achiv3.jpg', name: 'Exoft corporate power' },
    { photoUrl: './../../../../assets/achiv4.jpg', name: 'Exoft skylark power' },
    { photoUrl: './../../../../assets/achiv5.jpg', name: 'Exoft turbo power' },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft corporate power' },
    { photoUrl: './../../../../assets/achiv7.jpg', name: 'Exoft skylark power' },
    { photoUrl: './../../../../assets/achiv8.jpg', name: 'Exoft skylark power' },
    { photoUrl: './../../../../assets/achiv9.jpg', name: 'Exoft skylark power' },
    { photoUrl: './../../../../assets/achiv6.jpg', name: 'Exoft skylark power' },

  ];

  constructor(
    public dialogRef: MatDialogRef<SayThanksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
