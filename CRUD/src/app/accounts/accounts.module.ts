import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import {MatCardModule} from '@angular/material/card'; 
import {MatListModule} from '@angular/material/list';
import { ViewAccountComponent } from './view-account/view-account.component'; 
import { RouterModule } from '@angular/router';
import { EditAccountComponent } from './edit-account/edit-account.component';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AddAccountComponent } from './add-account/add-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

@NgModule({
  declarations: [
    ListAccountsComponent,
    ViewAccountComponent,
    EditAccountComponent,
    AddAccountComponent,
    DeleteAccountComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class AccountsModule { }
