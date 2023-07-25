import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-numbers',
  templateUrl: './card-numbers.component.html',
  styleUrls: ['./card-numbers.component.css']
})
export class CardNumbersComponent {
  @Input() number!: number;
  @Input() numberCategory!: number;
  @Input() category!: string;
}
