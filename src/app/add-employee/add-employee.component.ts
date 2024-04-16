import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { CreateUpdateEmployeeDto, EmployeeServicesService } from '@proxy';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule,FormsModule],
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

