import { Component, OnInit } from '@angular/core';
import {Employee} from './employe.model'

@Component({
  selector: 'app-employees-ex',
  templateUrl: './employees-ex.component.html',
  styleUrls: ['./employees-ex.component.css']
})
export class EmployeesExComponent implements OnInit {
  employees: Employee[];
  constructor() {
    this.employees = [
    {
      id: 1,
      name: 'Sponge Bob',
      email: 'bob@employyes.com',
      location: 'Ocean',
      phone: '087654321',
      department: 'Crusty crab',
      position: 'Barman'
    },
    {
      id: 2,
      name: 'Partic',
      email: 'pat@employyes.com',
      location: 'Ocean',
      phone: '087612345',
      department: 'Crusty crab',
      position: 'Courier'
    }
    ]
  }

  ngOnInit() {
  }

}
