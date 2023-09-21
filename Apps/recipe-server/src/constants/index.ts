import { ServiceStatus, ServiceStatusFunction } from '../types';

export const EMPTY_ID: string = '00000000-0000-0000-0000-000000000000';

export const EMPTY_SERVICE_STATUS_FUNCTION: ServiceStatusFunction = async (): Promise<ServiceStatus[]> => [];

export const SESSION_COOKIE_NAME: string = 'session';

export const SESSION_HEADER_NAME: string = 'X-Session';
