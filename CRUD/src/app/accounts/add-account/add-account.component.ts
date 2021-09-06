import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {

  addAccountForm: FormGroup = new FormGroup({});

  constructor(private accountService: AccountService, private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.addAccountForm = this.formBuilder.group({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'username': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'email': new FormControl('', [Validators.required, Validators.email, Validators.minLength(6)]),
      'street': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'zipcode': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'country': new FormControl('', [Validators.required, Validators.minLength(2)]),
    })
  }

  createAccount() {
    this.accountService.createAccount(this.addAccountForm.value).subscribe(data => {
      this._snackBar.open("Account created successfully");
    }, err => {
      this._snackBar.open("Something went wrong. Failed to create new account");
    })
  }

}
