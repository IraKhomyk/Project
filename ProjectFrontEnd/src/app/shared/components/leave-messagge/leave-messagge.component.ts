import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-leave-messagge',
  templateUrl: './leave-messagge.component.html',
  styleUrls: ['./leave-messagge.component.scss']
})
export class LeaveMessaggeComponent {
fromDialog: string;

  commentForm: FormGroup = new FormGroup({
    "comment": new FormControl("", Validators.required)
  });

  constructor(public dialogRef: MatDialogRef<LeaveMessaggeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

    thanks() {
      this.dialogRef.close({ event: 'close', data: this.commentForm.value });
    }
  
}
