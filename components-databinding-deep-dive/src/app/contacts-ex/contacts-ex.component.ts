import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-ex',
  templateUrl: './contacts-ex.component.html',
  styleUrls: ['./contacts-ex.component.css']
})
export class ContactsExComponent implements OnInit {
  contacts: any[];
  constructor() {
    this.contacts = [
    {
      fname: 'Mariya',
      lname: 'Ivanova',
      tel: '123456',
      email: 'mariya@sbnd.net',
      city: 'Plovdiv'
    },
    {
      fname: 'Todor',
      lname: 'Atanasov',
      tel: '987654',
      email: 'todor@sbnd.net',
      city: 'Plovdiv'
    }
    ]
  }

  ngOnInit() {
  }

  addContact(contact) {
    this.contacts.push(contact);
  }
}
