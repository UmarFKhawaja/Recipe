import { Context, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { showNotification } from '@mantine/notifications';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionType } from './types';
import { useIdle } from '@mantine/hooks';

const INITIAL_VALUE: SessionType = {
  isAuthenticated: false,
  invalidateAuthentication: () => {}
};

const SessionContext: Context<SessionType> = createContext<SessionType>(INITIAL_VALUE);

export function SessionProvider({ children }: SessionProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const idle = useIdle(1000);

  const invalidateAuthentication = useCallback(() => {
    isValidSession()
      .then((isAuthenticated) => setIsAuthenticated(isAuthenticated))
      .catch(() => {
        showNotification({
          message: 'We could not validate your session.',
          color: 'red'
        });
      });
  }, [setIsAuthenticated]);

  useEffect(() => {
    invalidateAuthentication();
  }, [idle]);

  const value: SessionType = {
    isAuthenticated,
    invalidateAuthentication
  };

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionType {
  return useContext(SessionContext);
}
