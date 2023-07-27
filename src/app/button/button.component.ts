import { Component,OnInit, Input } from '@angular/core';

@Component({
  selector: 'buttonBorder',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
  @Input() label!: string;
  @Input() add:boolean = false;
  @Input() calendar:boolean = false;

  constructor(){}

  ngOnInit() {
    
  }
}
