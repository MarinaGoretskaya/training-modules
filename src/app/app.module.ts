import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HomeModule,
    AboutModule,
    ContactsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
