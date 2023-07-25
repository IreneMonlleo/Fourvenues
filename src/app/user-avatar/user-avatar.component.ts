import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.css']
})
export class UserAvatarComponent implements OnInit {

  public userAvatarList: any = [];
  constructor(private httpClient: HttpClient) {}
  
  
  ngOnInit(): void {
    
    this.updateUsers();

    setInterval(() => {
      this.updateUsers();
    }, 10000);
  }

  execute() {
    this.updateUsers();
  }

  private updateUsers() {
    this.httpClient.get('https://randomuser.me/api?results=1')
      .subscribe((response: any) => {
        this.userAvatarList = response.results;
      });
  }
  
}
