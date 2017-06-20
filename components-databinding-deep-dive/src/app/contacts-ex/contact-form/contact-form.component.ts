import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() contact= new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  addContact(formValue){
    this.contact.emit(formValue);
  }

}
