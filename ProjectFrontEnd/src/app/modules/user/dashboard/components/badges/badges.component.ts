import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent {

  constructor(public readonly authUserService: AuthUserService){}
}
