import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms'
import { Employee } from '../../employe.model'

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {

  @Input() employeeData: Employee;
  @Input() modalType: string;
  @Output() addEmployee: EventEmitter<Employee> = new EventEmitter;
  @Output() editEmployee: EventEmitter<Employee> = new EventEmitter;

  employeeForm: FormGroup;
  constructor(public fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      'id': [null],
      'name': [''],
      'email': [''],
      'location': [''],
      'phone': [''],
      'department': [''],
      'position': ['']
    })
  }

  ngOnInit() {
    this.employeeForm.patchValue(this.employeeData);
  }

  onEmployeeAdd() {
    this.addEmployee.emit(this.employeeForm.value);
    this.clearForm();
  }

  onEmployeeEdit() {
    this.editEmployee.emit(this.employeeForm.value);
  }

  clearForm() {
    this.employeeData = {id: null, name:'',email:'',location:'',phone:'',department:'',position:''};
    this.employeeForm.patchValue(this.employeeData);
  }
}
