import { Link } from 'react-router-dom';
import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  Image,
  rem,
  ScrollArea,
  SimpleGrid,
  Text,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { useLogout } from '../../hooks';
import { useSession } from '../../providers';
import logo from './assets/logo.png';
import { FeatureButton } from './components';
import { data } from './data';
import classes from './styles';

export function Header() {
  const { isAuthenticated } = useSession();

  const { logout } = useLogout();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const theme = useMantineTheme();

  const links = data.map((item) => (
    <FeatureButton key={item.title} title={item.title} description={item.description} icon={item.icon}/>
  ));

  return (
    <Box pb={120}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Anchor component={Link} to="/">
            <Image src={logo} alt="Logo" width={30} height={30}/>
          </Anchor>

          <Group h="100%" gap={0} visibleFrom="sm">
            <Anchor className={classes.link}>
              Home
            </Anchor>
            <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
              <HoverCard.Target>
                <Anchor className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Features
                    </Box>
                    <IconChevronDown
                      style={{ width: rem(16), height: rem(16) }}
                      color={theme.colors.blue[6]}
                    />
                  </Center>
                </Anchor>
              </HoverCard.Target>

              <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                <Group justify="space-between" px="md">
                  <Text fw={500}>Features</Text>
                  <Anchor href="#" fz="xs">
                    View all
                  </Anchor>
                </Group>

                <Divider my="sm"/>

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group justify="space-between">
                    <div>
                      <Text fw={500} fz="sm">
                        Get started
                      </Text>
                      <Text size="xs" c="dimmed">
                        Their food sources have decreased, and their numbers
                      </Text>
                    </div>
                    <Button variant="default">Get started</Button>
                  </Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
            <Anchor className={classes.link}>
              Learn
            </Anchor>
            <Anchor className={classes.link}>
              Academy
            </Anchor>
          </Group>

          <Group visibleFrom="sm">
            {
              isAuthenticated
                ? (
                  <>
                    <Button variant="default" onClick={logout}>Sign out</Button>
                  </>
                )
                : (
                  <>
                    <Button component={Link} variant="default" to="/sign-in">Sign in</Button>
                    <Button component={Link} to="/sign-up">Sign up</Button>
                  </>
                )
            }
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

          <Anchor className={classes.link}>
            Home
          </Anchor>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Anchor className={classes.link}>
            Learn
          </Anchor>
          <Anchor className={classes.link}>
            Academy
          </Anchor>

          <Divider my="sm"/>

          <Group justify="center" grow pb="xl" px="md">
            {
              isAuthenticated
                ? (
                  <>
                    <Button variant="default" onClick={logout}>Sign out</Button>
                  </>
                )
                : (
                  <>
                    <Button component={Link} variant="default" to="/sign-in">Sign in</Button>
                    <Button component={Link} to="/sign-up">Sign up</Button>
                  </>
                )
            }
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
