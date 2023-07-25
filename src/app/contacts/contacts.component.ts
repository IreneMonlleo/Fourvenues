import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';

@Component({
  selector: 'contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  public contactList: any = [];
  constructor(private httpClient: HttpClient) {}
  
  
  ngOnInit(): void {
   
    this.httpClient.get('https://randomuser.me/api?results=10')
      .subscribe((response: any) => {
        this.contactList = response.results;
      });
  }
  
}
