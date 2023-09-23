import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { useForm, UseFormReturnType } from '@mantine/form';
import { showNotification } from '@mantine/notifications';
import { config } from '../../../config';
import { useSession } from '../../../providers';
import { SignInForm } from '../types';

export function useData() {
  const navigate = useNavigate();

  const { invalidateAuthentication } = useSession();

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

      invalidateAuthentication();

      navigate('/manage');
    }
  }, [navigate]);

  return {
    form,
    submit
  };
}
