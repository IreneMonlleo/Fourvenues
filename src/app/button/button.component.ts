import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'buttonBorder',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() label!: string;

  constructor(){}

  ngOnInit() {
    
  }
}
