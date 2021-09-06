import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = 'http://localhost:3000/api/accounts';

  constructor(private http: HttpClient) { }

  listAccounts() {
    return this.http.get(this.baseUrl);
  }

  viewAccount(accountId: any) {
    return this.http.get(this.baseUrl + '/' + accountId);
  }

  updateAccount(accountId: string, accountObj: any) {
    return this.http.put(this.baseUrl + '/' + accountId, accountObj);
  }

  createAccount(accountObj: any) {
    return this.http.post(this.baseUrl + '/add', accountObj);
  }

  deleteAccount(accountId: string) {
    return this.http.delete(this.baseUrl + '/' + accountId)
  }
}
