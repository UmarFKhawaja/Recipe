import { Outlet } from 'react-router';
import { Box } from '@mantine/core';
import { Header } from '../../components';

export function BrowseElement() {
  return (
    <Box>
      <Header/>
      <Outlet/>
    </Box>
  );
}
