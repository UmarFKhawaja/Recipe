import { Box, Center, Collapse, rem, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import classes from './styles';
import { DrawerLinksProps } from './props';

export function DrawerLinks({ links }: DrawerLinksProps) {
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const theme = useMantineTheme();

  return (
    <>
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
    </>
  );
}
