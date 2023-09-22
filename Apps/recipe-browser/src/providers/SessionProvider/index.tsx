import { Context, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionType } from './types';
import { showNotification } from '@mantine/notifications';

const INITIAL_VALUE: SessionType = {
  isAuthenticated: false,
  invalidateAuthentication: () => {}
};

const SessionContext: Context<SessionType> = createContext<SessionType>(INITIAL_VALUE);

export function SessionProvider({ children }: SessionProviderProps) {
  const [timestamp, setTimestamp] = useState<number>(new Date().valueOf());

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const invalidateAuthentication = useCallback(() => {
    setTimestamp(new Date().valueOf());
  }, [setTimestamp]);

  useEffect(() => {
    isValidSession()
      .then((isAuthenticated) => setIsAuthenticated(isAuthenticated))
      .catch(() => {
        showNotification({
          message: 'We could not validate your session.',
          color: 'red'
        });
      });

    return () => {};
  }, [isAuthenticated, setIsAuthenticated, timestamp]);

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
