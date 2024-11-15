import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-table', component: EmployeeTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
