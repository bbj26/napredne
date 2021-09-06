import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { LayoutModule } from '../app/layout/layout.module';
import { AccountsModule } from './accounts/accounts.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';
import { AccountService } from './services/account.service';
import { WeatherModule } from './weather/weather.module';
import { StorageModule } from './storage/storage.module';
import { StorageService } from './services/storage.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    LayoutModule,
    AccountsModule,
    AuthModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    WeatherModule,
    StorageModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, StorageService, AccountService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
