import { ActionIcon, Card, Group, rem, Skeleton, useMantineTheme } from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import classes from './styles';

export function RecipeSkeleton() {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Skeleton height={180} className={classes.noBorderRadius}/>
      </Card.Section>

      <Skeleton height={24} mt="md"/>

      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs"/>
      <Skeleton height={16} mt="xs" width="75%"/>

      <Group justify="space-between" className={classes.footer}>
        <Skeleton height={24} width={24} circle/>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action} disabled>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[6]}/>
          </ActionIcon>
          <ActionIcon className={classes.action} disabled>
            <IconBookmark style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[7]}/>
          </ActionIcon>
          <ActionIcon className={classes.action} disabled>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.gray[6]}/>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
