import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { showNotification } from '@mantine/notifications';
import { config } from '../config';
import { useSession } from '../providers';

export function useLogout() {
  const navigate = useNavigate();

  const { invalidateAuthentication } = useSession();

  const logout = useCallback(async () => {
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
      invalidateAuthentication();

      navigate('/');
    }
  }, [navigate]);

  return {
    logout
  };
}
