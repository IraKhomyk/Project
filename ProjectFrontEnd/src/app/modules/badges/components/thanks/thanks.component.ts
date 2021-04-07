import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';
type userShortInfo = Pick<User, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent {
  user: userShortInfo = {
    firstName: 'Dima',
    lastName: 'Khomyk',
    photoUrl: '',
    color: 'rgb(40, 120, 224)',
  }
}
