import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/shared/services/UserServiceMock/user-service.service';

@Component({
  selector: 'app-exoft-achievements',
  templateUrl: './exoft-achievements.component.html',
  styleUrls: ['./exoft-achievements.component.scss']
})
export class ExoftAchievementsComponent {

  constructor(public readonly userService: UserServiceService) {
  }
}
