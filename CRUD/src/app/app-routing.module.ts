import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { DeleteAccountComponent } from './accounts/delete-account/delete-account.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';
import { ListAccountsComponent } from './accounts/list-accounts/list-accounts.component';
import { ViewAccountComponent } from './accounts/view-account/view-account.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddItemComponent } from './storage/add-item/add-item.component';
import { DeleteItemComponent } from './storage/delete-item/delete-item.component';
import { EditItemComponent } from './storage/edit-item/edit-item.component';
import { ListItemsComponent } from './storage/list-items/list-items.component';
import { ViewItemComponent } from './storage/view-item/view-item.component';
import { FanStatusComponent } from './weather/fan-status/fan-status.component';
import { HumidityComponent } from './weather/humidity/humidity.component';
import { TemperatureComponent } from './weather/temperature/temperature.component';

const routes: Routes = [
  {path: '', component: ListItemsComponent},
  
  {path: 'temperature', component: TemperatureComponent},
  {path: 'humidity', component: HumidityComponent},
  {path: 'fanstatus', component: FanStatusComponent},

  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},

  {path: 'items', 
  children: [
    {path: '', component: ListItemsComponent},
    {path: 'add', component: AddItemComponent},
    {path: 'view/:id', component: ViewItemComponent},
    {path: 'edit/:id', component: EditItemComponent},
    {path: 'delete/:id', component: DeleteItemComponent}
  ]},

  {path: 'accounts',  
    children: [
      {path: '', component: ListAccountsComponent},
      {path: 'view/:id', component: ViewAccountComponent},
      {path: 'edit/:id', component: EditAccountComponent},
      {path: 'create', component: AddAccountComponent},
      {path: 'delete/:id', component: DeleteAccountComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
