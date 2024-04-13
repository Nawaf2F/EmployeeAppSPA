import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'EmployeeApp',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44321/',
    redirectUri: baseUrl,
    clientId: 'EmployeeApp_App',
    responseType: 'code',
    scope: 'offline_access EmployeeApp',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44321',
      rootNamespace: 'EmployeeApp',
    },
  },
} as Environment;
