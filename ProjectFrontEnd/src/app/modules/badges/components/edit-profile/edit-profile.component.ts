import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/shared/services/UserService/user-service.service';
import { EditProfileModalWinComponent } from 'src/app/shared/components/edit-profile-modal-win/edit-profile-modal-win.component';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

  constructor(
    public dialog: MatDialog,
    public readonly userService: UserServiceService) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'edit-profile-modal-win',
      width: '500px',
      height: '600px',
    })
  }
}
