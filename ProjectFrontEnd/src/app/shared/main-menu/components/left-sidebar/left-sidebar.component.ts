import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditProfileModalWinComponent } from 'src/app/shared/edit-profile/edit-profile-modal-win/edit-profile-modal-win.component';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent {
  opened = false;

  links = ['Dashboard', 'Badges', 'Orders'];
  activeLink = this.links[0];

  user: User = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    email: 'ira@gmail.com',
    password: 'ira!2345',
    status: ':)',
    photoUrl: './../../../../assets/myphoto.jpg',
    badges: 4,
    exp: 80,
    color: 'rgb(92, 198, 206)',
  };

  constructor(public dialog: MatDialog){}

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'edit-profile-modal-win',
      width: '500px',
      height: '600px',
    })
  }
}
