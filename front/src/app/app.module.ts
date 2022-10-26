import { NgModule, LOCALE_ID } from '@angular/core';
import ptBr from '@angular/common/locales/br';
import { BrowserModule } from '@angular/platform-browser';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { registerLocaleData } from '@angular/common';
import { EmployeeService } from './service/employee.service'


registerLocaleData(ptBr,'pt-BR');


@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService, { provide: LOCALE_ID, useValue:'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
