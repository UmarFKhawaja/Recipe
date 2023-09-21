import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { config } from '../../../config';
import { SESSION_MARKER_COOKIE_NAME } from '../../../constants';
import { SignInForm } from '../types';
import { useCookies } from 'react-cookie';
import dayjs from 'dayjs';

export function useData() {
  const navigate = useNavigate();

  const [, setCookie] = useCookies([SESSION_MARKER_COOKIE_NAME]);

  const form: UseFormReturnType<SignInForm> = useForm<SignInForm>({
    initialValues: {
      username: '',
      password: ''
    },
    validate: {
      username: (value: string): boolean => !value,
      password: (value: string): boolean => !value
    }
  });

  const submit = useCallback(async (values: SignInForm) => {
    const {
      username,
      password
    } = values;

    const response = await fetch(`${config.server.url}/auth/login/password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        username,
        password
      })
    });

    if (!response.ok) {
      showNotification({
        message: 'We could not sign in you successfully at this time. Check details and try again.',
        color: 'red'
      });
    } else {
      showNotification({
        message: 'We have signed you in successfully.',
        color: 'green'
      });

      setCookie(SESSION_MARKER_COOKIE_NAME, {
        iat: dayjs().toDate().valueOf(),
        exp: dayjs().add(1, 'hour').toDate().valueOf()
      });

      navigate('/view/dashboard');
    }
  }, [navigate]);

  return {
    form,
    submit
  };
}
