import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loginUserForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  
  loginUser() {
    this.authService.loginUser(this.loginUserForm.value)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      this._snackBar.open("User logged in successfully");
      this.router.navigate(['users/list']);
    }, err => {
      this._snackBar.open("Something went wrong. Failed to log in");
    })
  }

}
