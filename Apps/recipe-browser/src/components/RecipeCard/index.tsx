import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  rem,
  Text,
  useMantineTheme
} from '@mantine/core';
import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
import { RecipeCardProps } from './props';
import classes from './styles';

export function RecipeCard({ recipe }: RecipeCardProps) {
  const theme = useMantineTheme();

  const linkProps = {
    href: recipe.contentURL,
    target: '_blank',
    rel: 'noopener noreferrer'
  };

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section>
        <Anchor {...linkProps}>
          <Image src={recipe.headerURL} height={180}/>
        </Anchor>
      </Card.Section>

      {
        recipe.rating === 'outstanding' && (
          <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
            {recipe.rating}
          </Badge>
        )
      }

      {
        recipe.rating === 'unique' && (
          <Badge className={classes.rating} variant="gradient" gradient={{ from: 'red', to: 'grape' }}>
            {recipe.rating}
          </Badge>
        )
      }

      <Text className={classes.title} fw={500} component="a" {...linkProps}>
        {recipe.title}
      </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {recipe.description}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src={recipe.authorURL}
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {recipe.authorName}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon className={classes.action}>
            <IconHeart style={{ width: rem(16), height: rem(16) }} color={theme.colors.red[6]}/>
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark
              style={{ width: rem(16), height: rem(16) }}
              color={theme.colors.yellow[7]}
            />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare style={{ width: rem(16), height: rem(16) }} color={theme.colors.blue[6]}/>
          </ActionIcon>
        </Group>
      </Group>
    </Card>
  );
}
