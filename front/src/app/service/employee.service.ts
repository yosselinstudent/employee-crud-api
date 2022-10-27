import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url='http://localhost:3000/api';

  constructor(private http: HttpClient) { 
    
   }

   /**
     * Metodo responsable de crear un nuevo colaborador
     */
    createNewEmployee(name: any, job_role: any, salary: any, date_of_birth: any, employee_resgistration: any){
        const employee={
          name,
          job_role,
          salary,
          date_of_birth,
          employee_resgistration
        }
        console.log(employee);

        this
          .http
          .post(`${this.url}/employees`, employee)
          .subscribe(res=>console.log('Feito'));
    }

    
}
