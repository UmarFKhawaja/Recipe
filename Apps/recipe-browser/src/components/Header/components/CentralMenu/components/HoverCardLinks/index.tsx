import { Link } from 'react-router-dom';
import { Anchor, Box, Center, Divider, Group, HoverCard, rem, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { CallToActionSection } from './components';
import { HoverCardLinksProps } from './props';
import classes from './styles';

export function HoverCardLinks({ links }: HoverCardLinksProps) {
  const theme = useMantineTheme();

  return (
    <HoverCard width={600} position="bottom" radius="md" shadow="md">
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
          <Anchor component={Link} fz="xs" to="/browse/features">
            View all
          </Anchor>
        </Group>

        <Divider my="sm"/>

        <SimpleGrid cols={2} spacing={0}>
          {links}
        </SimpleGrid>

        <Box className={classes.dropdownFooter}>
          <CallToActionSection/>
        </Box>
      </HoverCard.Dropdown>
    </HoverCard>
  );
}
