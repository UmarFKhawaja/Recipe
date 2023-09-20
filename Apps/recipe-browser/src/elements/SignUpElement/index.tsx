import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Anchor, Box, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm, UseFormReturnType } from '@mantine/form';
import { SignUpForm } from './types';
import classes from './index.module.css';

export function SignUpElement() {
  const form: UseFormReturnType<SignUpForm> = useForm<SignUpForm>({
    initialValues: {
      userName: '',
      password1: '',
      password2: ''
    },
    validate: {
      userName: (value: string): boolean => !value,
      password1: (value: string): boolean => !value,
      password2: (value: string): boolean => !value
    }
  });

  const submit = useCallback((values: SignUpForm) => {
    alert(values);
  }, []);

  return (
    <Box className={classes.hero}>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do you already have an account?{' '}
          <Anchor component={Link} size="sm" to="/sign-in">
            Sign in
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <form onSubmit={form.onSubmit(submit)}>
            <TextInput
              size="lg"
              label="Email"
              placeholder="you@mantine.dev"
              required
              {...form.getInputProps('userName')}
            />
            <PasswordInput
              size="lg"
              label="Password (choose)"
              placeholder="Your password"
              required
              mt="md"
              {...form.getInputProps('password1')}
            />
            <PasswordInput
              size="lg"
              label="Password (confirm)"
              placeholder="Your password again"
              required
              mt="md"
              {...form.getInputProps('password2')}
            />
            <Group justify="space-between" mt="md">
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button size="lg" fullWidth mt="md" type="submit">
              Sign up
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
