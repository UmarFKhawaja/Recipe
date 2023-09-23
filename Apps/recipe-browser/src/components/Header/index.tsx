import { Link } from 'react-router-dom';
import { Anchor, Box, Burger, Divider, Drawer, Group, Image, rem, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import logo from './assets/logo.png';
import { AccountActions, CentralMenu, FeatureButton } from './components';
import { data } from './data';
import classes from './styles';

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const links = data.map((item) => (
    <FeatureButton key={item.title} title={item.title} description={item.description} icon={item.icon} link={item.link}/>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Anchor component={Link} to="/">
            <Image src={logo} alt="Logo" width={30} height={30}/>
          </Anchor>

          <Group h="100%" gap={0} visibleFrom="sm">
            <CentralMenu variant="hover-card" links={links}/>
          </Group>

          <Group visibleFrom="sm">
            <AccountActions/>
          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm"/>

          <CentralMenu variant="drawer" links={links}/>

          <Divider my="sm"/>

          <Group justify="center" grow pb="xl" px="md">
            <AccountActions/>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
