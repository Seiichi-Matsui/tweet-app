import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavberComponent } from './navber/navber.component';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { TweetComponent } from './tweet/tweet.component';
import { AuthService } from './auth/auth.service';
import { SharDateService } from './sharDate/sharDate.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    AuthComponent,
    TweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    AuthService,
    SharDateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
