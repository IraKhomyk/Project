import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { userWithAchievements } from 'src/app/models/user-with-achievements.model';
import { EditProfileModalWinComponent } from 'src/app/shared/edit-profile/edit-profile-modal-win/edit-profile-modal-win.component';
type userShortInfo = Pick<userWithAchievements, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  routers = [{
    link: '/dashboard',
    name: 'Dashboard'
  },
  {
    link: '/badges',
    name: 'Badges'
  },
  {
    link: '/orders',
    name: 'Orders'
  }
  ];

  activeLink = this.routers[0];

  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }

  constructor(public dialog: MatDialog) { }

  editProfile(): void {
    const dialogRef = this.dialog.open(EditProfileModalWinComponent, {
      panelClass: 'edit-profile-modal-win',
      width: '500px',
      height: '600px',
    })
  }
}


