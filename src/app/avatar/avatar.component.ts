import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent {
  /* Name of the user*/
 @Input() name!: string;
  /* Last name of the user*/
  @Input() lastName!: string;
 /* Url of the picture*/
 @Input() image!: string;
 /* Notifications */
 @Input() notification:boolean = false;

  
}
