import { ReactNode } from 'react';
import { CentralMenuVariant } from '../types';

export interface CentralMenuProps {
  variant: CentralMenuVariant;
  links: ReactNode;
}
