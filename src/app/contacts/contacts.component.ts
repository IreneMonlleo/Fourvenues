import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactList: any = [];
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
    this.httpClient.get('https://randomuser.me/api?results=8')
      .subscribe((response: any) => {
        this.contactList = response.results;
      });
  }
  
}
