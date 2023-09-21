import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { showNotification } from '@mantine/notifications';
import { config } from '../../../config';
import { useCookies } from 'react-cookie';
import { SESSION_MARKER_COOKIE_NAME } from '../../../constants';

export function useData() {
  const navigate = useNavigate();

  const [, setCookie] = useCookies([SESSION_MARKER_COOKIE_NAME]);

  const submit = useCallback(async () => {
    const response = await fetch(`${config.server.url}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign you out successfully. Clear your browser\'s cookies',
        color: 'red'
      });
    } else {
      setCookie(SESSION_MARKER_COOKIE_NAME, {});

      navigate('/');
    }
  }, [navigate]);

  return {
    submit
  };
}
