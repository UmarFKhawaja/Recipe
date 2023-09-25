import { useCallback, useEffect, useMemo, useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { showNotification } from '@mantine/notifications';
import { config } from '../../config';
import { SessionContext } from './contexts';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionType } from './types';

export function SessionProvider({ children }: SessionProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

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
  }, [invalidateAuthentication]);

  const value: SessionType = {
    isAuthenticated,
    invalidateAuthentication
  };

  const client = useMemo(() => new ApolloClient({
    uri: `${config.server.url}/graphql`,
    cache: new InMemoryCache()
  }), []);

  return (
    <SessionContext.Provider value={value}>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </SessionContext.Provider>
  );
}
