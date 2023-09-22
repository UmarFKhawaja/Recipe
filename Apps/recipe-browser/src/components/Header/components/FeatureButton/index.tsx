import { Box, Group, rem, Text, ThemeIcon, UnstyledButton, useMantineTheme } from '@mantine/core';
import { FeatureButtonProps } from './props';
import classes from './styles';

export function FeatureButton({ title, description, icon: Icon }: FeatureButtonProps) {
  const theme = useMantineTheme();

  return (
    <UnstyledButton className={classes.subLink}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <Icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]}/>
        </ThemeIcon>
        <Box>
          <Text size="sm" fw={500}>
            {title}
          </Text>
          <Text size="xs" c="dimmed">
            {description}
          </Text>
        </Box>
      </Group>
    </UnstyledButton>
  );
}
