import { useOutlet } from 'react-router';
import { Box, Container, Text, Title } from '@mantine/core';
import { Header } from '../../components';
import { ManageEverythingElement } from '../ManageEverythingElement';
import classes from './styles';

export function ManageElement() {
  const outlet = useOutlet();

  return (
    <Box>
      <Header/>
      <Container className={classes.container} size="md">
        <Title className={classes.title}>A fully featured recipes resource</Title>
        <Text className={classes.description} size="xl" mt="xl">
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and hooks to cover you in any situation
        </Text>
        {
          outlet
            ? outlet
            : <ManageEverythingElement/>
        }
      </Container>
    </Box>
  );
}
