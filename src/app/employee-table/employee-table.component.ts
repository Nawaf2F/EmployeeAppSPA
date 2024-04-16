import { Component } from '@angular/core';
import { PagedResultDto } from '@abp/ng.core';
import {  EmployeeDto, EmployeeFilterDto, EmployeeServicesService } from '@proxy';
import { ActivatedRoute, Route, Router } from '@angular/router' 
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { FilterEmployeeComponent } from '../filter-employee/filter-employee.component';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [CommonModule, AddEmployeeComponent, FilterEmployeeComponent],
  templateUrl: './employee-table.component.html'
})
export class EmployeeTableComponent {
  empToggle = false;
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
  }

  constructor(private employeeService: EmployeeServicesService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getList(this.filter).subscribe((result: PagedResultDto<EmployeeDto>) => {
      console.log(result);
      this.empToggle = false
      this.filterToggle = false
      this.employees = result.items;
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

  onNewEmployee(){
    this.empToggle = !this.empToggle;
    console.log(this.empToggle);
  }

  newFilter(filteredList: EmployeeFilterDto){
    console.log('filtered',filteredList)
    this.filter = filteredList
    this.loadEmployees();
  }

  toggleFilter() {
    this.filterToggle = !this.filterToggle;
  }

}
