import { ServiceStatus, ServiceStatusFunction } from '../types';

export const EMPTY_SERVICE_STATUS_FUNCTION: ServiceStatusFunction = async (): Promise<ServiceStatus[]> => [];

export const MARKER_COOKIE_NAME: string = 'marker';

export const SESSION_COOKIE_NAME: string = 'session';

export const MARKER_HEADER_NAME: string = 'X-Marker';

export const SESSION_HEADER_NAME: string = 'X-Session';
