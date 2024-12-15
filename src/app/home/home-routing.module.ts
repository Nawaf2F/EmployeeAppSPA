import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employee-table', component: EmployeeTableComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
