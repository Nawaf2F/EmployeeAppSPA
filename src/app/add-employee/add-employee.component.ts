import { Component, Output, EventEmitter } from '@angular/core';
import { CreateUpdateEmployeeDto, EmployeeServicesService } from '@proxy';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent {
@Output() loading: EventEmitter<any> = new EventEmitter<any>();

employee : CreateUpdateEmployeeDto = {
  name: '',
  email: '',
  position: '',
  salary: 0
}

constructor(private employeeService: EmployeeServicesService){}

onSubmit(){
console.log(this.employee)
  this.employeeService.create(this.employee).subscribe({
    next: (response) => {
      console.log('Record created', response);
      this.loading.emit();
    },
    error: (error) => {
      console.error('Error:', error);
    }
  });

    

  }

}

