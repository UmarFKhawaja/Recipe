import { Box, Button, Container, Text, Title } from '@mantine/core';
import { useSession } from '../../providers';
import { useData } from './hooks';
import classes from './styles';

export function ViewDashboardElement() {
  const { isAuthenticated } = useSession();

  const { submit } = useData();

  return (
    <Box>
      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured recipes resource</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>
        {
          isAuthenticated && (
            <Button variant="gradient" size="xl" className={classes.control} onClick={submit}>
              Sign out
            </Button>
          )
        }
      </Container>
    </Box>
  );
}
