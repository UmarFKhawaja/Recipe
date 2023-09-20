import { ServiceStatus } from './ServiceStatus';

export type ServiceStatusFunction = () => Promise<ServiceStatus[]>;
