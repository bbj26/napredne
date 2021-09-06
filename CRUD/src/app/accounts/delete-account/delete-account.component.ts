import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.scss']
})
export class DeleteAccountComponent implements OnInit {

  accountId: string = '';

  constructor(private accountService: AccountService, private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.accountId = data.id;
    });

    if(this.accountId !== '') {
      this.accountService.deleteAccount(this.accountId).subscribe(data => {
        this._snackBar.open("Account successfully deleted");
      }, err => {
        this._snackBar.open("Unable to delete account");
      })
    }
  }

}
