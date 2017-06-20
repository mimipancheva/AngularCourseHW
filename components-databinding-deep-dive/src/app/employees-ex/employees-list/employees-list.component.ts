import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'
import {Employee} from '../employe.model'
@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  @Input() EmployeesArray: Employee[]
  constructor() { }

  ngOnInit() {
  }
  deleteEmployee(index) {
    this.EmployeesArray.splice(index, 1);
  }
  editEmployee(data, index) {
    this.EmployeesArray[index]=data;
  }

  addEmployee(data) {
    this.EmployeesArray.push(data);
    let addedElement = this.EmployeesArray[(this.EmployeesArray.length)-1];
    addedElement.id = this.EmployeesArray[(this.EmployeesArray.length) - 2].id + 1;
  }
}
