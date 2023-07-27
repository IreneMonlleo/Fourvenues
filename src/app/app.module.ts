
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { ButtonComponent } from './button/button.component';
import { DataTableComponent } from './data-table/data-table.component';
import { CitiesTableComponent } from './cities-table/cities-table.component';
import { ProgresBarComponent } from './progres-bar/progres-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavInterfaceComponent } from './nav-interface/nav-interface.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MenuDashboardComponent } from './menu-dashboard/menu-dashboard.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CardNumbersComponent } from './card-numbers/card-numbers.component';
import { HttpClientModule } from '@angular/common/http';
import { NgChartsModule, NgChartsConfiguration } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    UserAvatarComponent,
    ButtonComponent,
    DataTableComponent,
    CitiesTableComponent,
    ProgresBarComponent,
    NavBarComponent,
    NavInterfaceComponent,
    ContactsComponent,
    MenuDashboardComponent,
    NavHeaderComponent,
    BarChartComponent,
    CardNumbersComponent,
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgChartsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NgChartsConfiguration, useValue: { generateColors: true }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
