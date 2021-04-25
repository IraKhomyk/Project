import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/UserServiceMock/user-service.service';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.scss']
})
export class ThanksComponent {
  constructor(public readonly userService: UserServiceService) { }
}
