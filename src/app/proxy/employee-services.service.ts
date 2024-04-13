import type { CreateUpdateEmployeeDto, EmployeeDto, EmployeeFilterDto } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServicesService {
  apiName = 'Default';
  

  create = (input: CreateUpdateEmployeeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'POST',
      url: '/api/app/employee-services',
      body: input,
    },
    { apiName: this.apiName,...config });
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/employee-services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'GET',
      url: `/api/app/employee-services/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getList = (input: EmployeeFilterDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<EmployeeDto>>({
      method: 'GET',
      url: '/api/app/employee-services',
      params: { nameFilter: input.nameFilter, emailFilter: input.emailFilter, positionFilter: input.positionFilter, minSalaryFilter: input.minSalaryFilter, maxSalaryFilter: input.maxSalaryFilter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  update = (id: string, input: CreateUpdateEmployeeDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, EmployeeDto>({
      method: 'PUT',
      url: `/api/app/employee-services/${id}`,
      body: input,
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
