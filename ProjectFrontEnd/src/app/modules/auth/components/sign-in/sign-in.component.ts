import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  signInForm: FormGroup = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });

  user$!: Subject<User>;
  
  constructor(private router: Router, private authService: AuthService ) { 
    this.user$ = this.authService.user$;
  }

  authenticate(): void {
    if (this.signInForm.valid) {
      this.authService.authenticate(this.signInForm.value.username, this.signInForm.value.password).pipe(take(1)).subscribe(res => {
        this.router.navigate(['']);
      });
    }
  }
}
