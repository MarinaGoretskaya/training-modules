import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { ContactsModule } from './contacts/contacts.module';

const routes: Routes = [
  {path: '', loadChildren: './home/home.module#HomeModule'},
  {path: 'about', loadChildren: './about/about.module#AboutModule'},
  {path: 'contacts', loadChildren: './contacts/contacts.module#ContactsModule'}
];
 const h = asf;

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
