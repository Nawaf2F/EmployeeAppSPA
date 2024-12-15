import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeDto, EmployeeFilterDto, EmployeeServicesService } from '@proxy';

@Component({
  selector: 'app-filter-employee',
  templateUrl: './filter-employee.component.html',
})
export class FilterEmployeeComponent {
  filterToggle = false;
  employees: EmployeeDto[];

  @Output() newFilter: EventEmitter<any> = new EventEmitter<any>();

  filter: EmployeeFilterDto = {
    nameFilter: '',
    emailFilter: '',
    positionFilter: '',
    minSalaryFilter: 0,
    maxSalaryFilter: 100000,
    sorting: '',
    skipCount: 0,
    maxResultCount: 5,
  }

  constructor(private employeeService: EmployeeServicesService){}
  
  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  applyFilter() {
    console.log('this', this.filter)
this.newFilter.emit(this.filter)
  }
}
