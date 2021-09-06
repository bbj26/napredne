import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private authService: AuthService, 
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.registerUserForm = this.formBuilder.group({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  registerUser() {
    this.authService.registerUser(this.registerUserForm.value)
    .subscribe(res => {
      localStorage.setItem('token', res.token);
      this._snackBar.open("User registered successfully");
      this.router.navigate(['users/list']);
    }, err => {
      this._snackBar.open("Something went wrong. Failed to register new user");
    })
  }
  
}
