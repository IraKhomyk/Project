import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';
type userShortInfo = Pick<User, 'firstName' | 'lastName' | 'photoUrl' | 'color'>;

@Component({
  selector: 'app-edit-profile-modal-win',
  templateUrl: './edit-profile-modal-win.component.html',
  styleUrls: ['./edit-profile-modal-win.component.scss']
})
export class EditProfileModalWinComponent {
  user: userShortInfo = {
    firstName: 'Ira',
    lastName: 'Khomyk',
    photoUrl: './../../../../assets/myphoto.jpg',
    color: '',
  }

  private readonly passwordRegex: RegExp = /^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}$/;

  profileForm: FormGroup = new FormGroup({
    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required, this.passwordValidator.bind(this)]),
    "status": new FormControl("")
  });

  constructor(
    public dialogRef: MatDialogRef<EditProfileModalWinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }


  onNoClick(): void {
    this.dialogRef.close();
  }

  private passwordValidator(control: AbstractControl): ValidationErrors | null {
    if (control?.value) {
      const isValid = this.passwordRegex.test(control.value);
      return !isValid ? { invalidPassword: true } : null;
    }
    return null;
  }
}
