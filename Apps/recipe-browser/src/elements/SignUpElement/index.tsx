import { Link } from 'react-router-dom';
import { Anchor, Box, Button, Container, Group, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useData } from './hooks';
import classes from './styles';

export function SignUpElement() {
  const {
    form,
    submit
  } = useData();

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
              label="Display name"
              placeholder="Your Name"
              required
              {...form.getInputProps('displayName')}
            />
            <TextInput
              size="lg"
              label="User name"
              placeholder="Your_User_Name"
              required
              mt="md"
              {...form.getInputProps('userName')}
            />
            <TextInput
              size="lg"
              label="Email address"
              placeholder="you@mantine.dev"
              required
              mt="md"
              {...form.getInputProps('emailAddress')}
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
              <Anchor component={Link} size="sm" to="/request-new-activation">
                Expired activation?
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
