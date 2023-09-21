import { Context, createContext, useContext } from 'react';
import { useCookies } from 'react-cookie';
import { SESSION_COOKIE_NAME } from '../../constants';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionType } from './types';

const SessionContext: Context<SessionType> = createContext<SessionType>({
  isAuthenticated: false
});

export function SessionProvider({ children }: SessionProviderProps) {
  const [cookies] = useCookies([SESSION_COOKIE_NAME]);

  const value = {
    isAuthenticated: isValidSession(cookies[SESSION_COOKIE_NAME])
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionType {
  return useContext(SessionContext)
}
