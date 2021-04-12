import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
type userShortInfo = Pick<User, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;

@Component({
  selector: 'app-edit-profile-modal-win',
  templateUrl: './edit-profile-modal-win.component.html',
  styleUrls: ['./edit-profile-modal-win.component.scss']
})
export class EditProfileModalWinComponent {
  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }

  profileForm: FormGroup = new FormGroup({
    "firstName": new FormControl(),
    "lastName": new FormControl(),
    "email": new FormControl(),
    "status": new FormControl()
  });

  constructor(
    public dialogRef: MatDialogRef<EditProfileModalWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
