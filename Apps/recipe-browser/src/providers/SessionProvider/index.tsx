import { Context, createContext, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { SESSION_MARKER_COOKIE_NAME } from '../../constants';
import { isValidSession } from './methods';
import { SessionProviderProps } from './props';
import { SessionType } from './types';
import { showNotification } from '@mantine/notifications';

const INITIAL_VALUE: SessionType = {
  isAuthenticated: false
};

const SessionContext: Context<SessionType> = createContext<SessionType>(INITIAL_VALUE);

export function SessionProvider({ children }: SessionProviderProps) {
  const [cookies] = useCookies([SESSION_MARKER_COOKIE_NAME]);

  const [value, setValue] = useState<SessionType>(INITIAL_VALUE);

  useEffect(() => {
    async function updateValue() {
      setValue({
        isAuthenticated: await isValidSession(cookies[SESSION_MARKER_COOKIE_NAME])
      });
    }

    updateValue().then().catch(() => {
      showNotification({
        message: 'We could not refresh your session successfully',
        color: 'yellow'
      });
    })
  }, [value, setValue]);

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionType {
  return useContext(SessionContext)
}
