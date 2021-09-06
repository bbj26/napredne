import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  accountId: string = '';
  accountDetails: any;
  editAccountForm: FormGroup = new FormGroup({});
  dataLoaded: boolean = false;

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.accountId = data.id
    })

    if (this.accountId !== '') {
      //View account details
      this.accountService.viewAccount(this.accountId)
        .toPromise()
        .then(data => {
          this.accountDetails = data;

          //Build edit form
          this.editAccountForm = this.formBuilder.group({
            'name': new FormControl(this.accountDetails.name, [Validators.required, Validators.minLength(2)]),
            'username': new FormControl(this.accountDetails.username, [Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
            'email': new FormControl(this.accountDetails.email, [Validators.required, Validators.email]),
            'street': new FormControl(this.accountDetails.street, [Validators.required, Validators.minLength(4)]),
            'zipcode': new FormControl(this.accountDetails.zipcode, [Validators.required,Validators.minLength(5)]),
            'country': new FormControl(this.accountDetails.country, [Validators.required, Validators.minLength(2)])
          })
          this.dataLoaded = true;
        })
        .catch(err => {
          console.log(err);
        })
    }

  }

  updateAccount() {
    this.accountService.updateAccount(this.accountId, this.editAccountForm.value).subscribe(data => {
      this._snackBar.open("Account updated successfully");
    }, err => {
      this._snackBar.open("Something went wrong. Failed to update account");
    })
  }

}
