import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
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
}
