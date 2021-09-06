import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})
export class ListAccountsComponent implements OnInit {

  accountsList: Array<{_id: string, name: string, username: string, email: string, stret: string, zipcode: Number, country: string}> = [];
  //accountsList: <any> = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.listAccounts().subscribe(data => {
      this.accountsList = Object.assign(this.accountsList, data);
    })
  }

}
