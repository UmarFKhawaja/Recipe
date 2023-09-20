import { Link } from 'react-router-dom';
import { Anchor, Box, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import classes from './index.module.css';

export function SignInElement() {
  return (
    <Box className={classes.hero}>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Anchor component={Link} size="sm" to="/sign-up">
            Sign up
          </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput size="lg" label="Email" placeholder="you@mantine.dev" required/>
          <PasswordInput size="lg" label="Password" placeholder="Your password" required mt="md"/>
          <Group justify="space-between" mt="md">
            <Anchor component={Link} size="sm" to="/recover-account">
              Forgot password?
            </Anchor>
          </Group>
          <Button size="lg" fullWidth mt="md">
            Sign in
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
