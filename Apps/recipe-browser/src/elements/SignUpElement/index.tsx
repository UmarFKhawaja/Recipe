import { Link } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button
} from '@mantine/core';
import classes from './index.module.css';

export function SignUpElement() {
  return (
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
        <TextInput size="lg" label="Email" placeholder="you@mantine.dev" required/>
        <PasswordInput size="lg" label="Password (choose)" placeholder="Your password" required mt="md"/>
        <PasswordInput size="lg" label="Password (confirm)" placeholder="Your password again" required mt="md"/>
        <Group justify="space-between" mt="md">
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button size="lg" fullWidth mt="md">
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}
