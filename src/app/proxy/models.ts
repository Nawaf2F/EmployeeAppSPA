import type { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface CreateUpdateEmployeeDto {
  name?: string;
  email?: string;
  position?: string;
  salary: number;
}

export interface EmployeeDto {
  id?: string;
  name?: string;
  email?: string;
  position?: string;
  salary: number;
}

export interface EmployeeFilterDto extends PagedAndSortedResultRequestDto {
  nameFilter?: string;
  emailFilter?: string;
  positionFilter?: string;
  minSalaryFilter?: number;
  maxSalaryFilter?: number;
}
