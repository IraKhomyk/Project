import { Component} from '@angular/core';
import { AuthUserService } from 'src/app/shared/services/auth-user-service/auth-user.service';

@Component({
  selector: 'app-total-achievements-and-exp',
  templateUrl: './total-achievements-and-exp.component.html',
  styleUrls: ['./total-achievements-and-exp.component.scss']
})
export class TotalAchievementsAndExpComponent {
constructor(public readonly authUserService: AuthUserService){}
}
