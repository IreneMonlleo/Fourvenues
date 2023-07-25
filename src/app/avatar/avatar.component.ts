import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit  {
  /* Name of the user*/
 @Input() name!: string;
 /*Url of the picture*/
 @Input() image!: string;
 /** */
 @Input() notification:boolean = false;

 constructor(){}

  ngOnInit() {
  }
}
