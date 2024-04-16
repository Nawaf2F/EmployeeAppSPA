
import { PagedResultDto } from '@abp/ng.core';
import { Component } from '@angular/core';
import { EmployeeDto, EmployeeFilterDto, EmployeeServicesService } from '@proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  filterToggle = false;
  employees: EmployeeDto[];
  filter: EmployeeFilterDto = {
    nameFilter: '',
    emailFilter: '',
    positionFilter: '',
    minSalaryFilter: 0,
    maxSalaryFilter: 100000,
    sorting: '',
    skipCount: 0,
    maxResultCount: 10,
  };

  constructor(private employeeService: EmployeeServicesService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getList(this.filter).subscribe((result: PagedResultDto<EmployeeDto>) => {
      console.log(result);
      this.employees = result.items; // Assuming the result has an 'items' property with the list of employees
    },
    error => {
      console.error('There was an error!', error);
    });
  }

  changeSortOrder(sorting: string) {
    this.filter.sorting = sorting;
    this.loadEmployees();
  }

  changePage(skipCount: number) {
    this.filter.skipCount = skipCount;
    this.loadEmployees();
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

  applyFilter() {
    this.loadEmployees();
    this.filterToggle = false;
  }

}
