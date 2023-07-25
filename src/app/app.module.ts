import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { ButtonComponent } from './button/button.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavInterfaceComponent } from './nav-interface/nav-interface.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CardNumbersComponent } from './card-numbers/card-numbers.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserAvatarComponent,
    ButtonComponent,
    DataTableComponent,
    ProgresBarComponent,
    NavBarComponent,
    NavInterfaceComponent,
    ContactsComponent,
    MenuDashboardComponent,
    NavHeaderComponent,
    CardNumbersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
