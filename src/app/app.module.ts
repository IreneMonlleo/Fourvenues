import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { ButtonComponent } from './button/button.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserAvatarComponent,
    ButtonComponent,
    DataTableComponent,
    ProgresBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
