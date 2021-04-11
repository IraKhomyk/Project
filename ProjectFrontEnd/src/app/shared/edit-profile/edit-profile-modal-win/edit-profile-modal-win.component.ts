import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-profile-modal-win',
  templateUrl: './edit-profile-modal-win.component.html',
  styleUrls: ['./edit-profile-modal-win.component.scss']
})
export class EditProfileModalWinComponent {
  constructor(
    public dialogRef: MatDialogRef<EditProfileModalWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }
}
