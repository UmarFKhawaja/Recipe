import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { config } from '../../../config';
import { SESSION_COOKIE_NAME, SESSION_HEADER_NAME } from '../../../constants';
import { SignInForm } from '../types';

export function useData() {
  const navigate = useNavigate();

  const [_, setCookie] = useCookies([SESSION_COOKIE_NAME]);

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
      const json = await response.json();

      const token = json[SESSION_HEADER_NAME];

      setCookie(SESSION_COOKIE_NAME, token);

      showNotification({
        message: 'We have signed you in successfully.',
        color: 'green'
      });

      navigate('/view/dashboard');
    }
  }, [navigate]);

  return {
    form,
    submit
  };
}
