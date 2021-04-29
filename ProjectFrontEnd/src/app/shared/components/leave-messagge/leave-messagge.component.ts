import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { UserService } from '../../services/user-service/user.service';

@Component({
  selector: 'app-leave-messagge',
  templateUrl: './leave-messagge.component.html',
  styleUrls: ['./leave-messagge.component.scss']
})
export class LeaveMessaggeComponent {

  commentForm: FormGroup = new FormGroup({
    "comment": new FormControl("", Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<LeaveMessaggeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private readonly userService: UserService,) { }

  sayThank(): void {
    this.userService.sayThank(this.commentForm.value.comment, this.data)
      .pipe(take(1)).subscribe(res => {
        this.dialogRef.close();
      });
  }

}
