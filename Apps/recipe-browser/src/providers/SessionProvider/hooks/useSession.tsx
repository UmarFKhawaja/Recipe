import { useContext } from 'react';
import { SessionContext } from '../contexts';
import { SessionType } from '../types';

export function useSession(): SessionType {
  return useContext(SessionContext);
}
