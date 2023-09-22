import { Link } from 'react-router-dom';
import { Box, Button, Container, Text, Title } from '@mantine/core';
import { useSession } from '../../providers';
import classes from './styles';

export function ViewRootElement() {
  const { isAuthenticated } = useSession();

  return (
    <Box className={classes.hero}>
      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured recipes resource</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>

        <Button component={Link} variant="gradient" size="xl" className={classes.control} to={isAuthenticated ? '/view/dashboard' : '/sign-in'}>
          Get started
        </Button>
      </Container>
    </Box>
  );
}
