import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit  {
 name!: string;
 notification!:boolean;

 constructor(){}

  ngOnInit() {
    
  }
}
