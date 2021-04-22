import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserServiceService } from 'src/app/services/UserService/user-service.service';
import { SayThanksComponent } from '../say-thanks/say-thanks.component';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent {

  constructor(public dialog: MatDialog,
    public readonly userServiceService: UserServiceService) { }

  sayThanks(): void {
    const dialogRef = this.dialog.open(SayThanksComponent, {
      panelClass: 'say-thanks-container',
      width: '800px',
      height: '400px',
      data: {}
    })
  }
}
