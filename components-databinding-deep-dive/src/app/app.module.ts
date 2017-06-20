import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ContactsExComponent } from './contacts-ex/contacts-ex.component';
import { EmployeesExComponent } from './employees-ex/employees-ex.component';
import { ContactFormComponent } from './contacts-ex/contact-form/contact-form.component';
import { ContactComponent } from './contacts-ex/contact/contact.component';
import { EmployeesListComponent } from './employees-ex/employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-ex/employees-list/employees-edit/employees-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsExComponent,
    EmployeesExComponent,
    ContactFormComponent,
    ContactComponent,
    EmployeesListComponent,
    EmployeesEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/contacts',
        pathMatch: 'full'
      },
      {
        path: 'contacts',
        component: ContactsExComponent
      },
      {
        path: 'employees',
        component: EmployeesExComponent
      }
    ])
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
