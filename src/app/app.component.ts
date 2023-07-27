import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fourvenues';

  list = [
    { category: "Click" , numberCategory: 670, number: 196.1 },
    { category: "Impressions", numberCategory: 1.245, number: 28.8 },
    { category: "CTR", numberCategory: 21.0, number: 89.1 },
    { category: "Click Conversions", numberCategory: 32, number: -81.2 },
    { category: "View Conversions", numberCategory: 22, number: -75.0 },
    { category: "Total Conversions", numberCategory: 250, number: 90.1 },
  ];



}
