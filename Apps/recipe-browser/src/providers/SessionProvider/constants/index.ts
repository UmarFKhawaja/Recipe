import { SessionType } from '../types';

export const INITIAL_VALUE: SessionType = {
  isAuthenticated: false,
  invalidateAuthentication: () => {
  }
};
