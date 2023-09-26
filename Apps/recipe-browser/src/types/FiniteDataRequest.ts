import { FiniteDataRequestVariables } from './FiniteDataRequestVariables';

export interface FiniteDataRequest {
  name: string;
  command: string;
  variables: FiniteDataRequestVariables;
}
