import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {path: 'home', loadChildren: './home/home.module#HomeModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule,
    ContactsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
