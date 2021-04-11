import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
import { EditProfileModalWinComponent } from 'src/app/shared/edit-profile/edit-profile-modal-win/edit-profile-modal-win.component';
type userShortInfo = Pick<User, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {
  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }

  constructor(
    public dialog: MatDialog
  ) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'edit-profile-modal-win',
      width: '800px',
      height: '400px',
    })
  }
}
