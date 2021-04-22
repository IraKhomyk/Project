import { Component } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserServiceService } from 'src/app/shared/services/UserService/user-service.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent {

  constructor(public readonly userService: UserServiceService) { }
}
