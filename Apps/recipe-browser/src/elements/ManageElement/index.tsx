import { Outlet } from 'react-router';
import { Box, Container } from '@mantine/core';
import { Header } from '../../components';
import classes from './styles';

export function ManageElement() {
  return (
    <Box>
      <Header/>
      <Container className={classes.container} size="md">
        <Outlet/>
      </Container>
    </Box>
  );
}
