import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { FilterEmployeeComponent } from '../filter-employee/filter-employee.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, HomeRoutingModule, EmployeeTableComponent, FilterEmployeeComponent, AddEmployeeComponent],
})
export class HomeModule {}
