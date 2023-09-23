import { Link } from 'react-router-dom';
import { Box, Button, Group, Text } from '@mantine/core';
import { useSession } from '../../../../../../../../providers';

export function CallToActionSection() {
  const { isAuthenticated } = useSession();

  return (
    <Group justify="space-between">
      <Box>
        <Text fw={500} fz="sm">
          Get started
        </Text>
        <Text size="xs" c="dimmed">
          Their food sources have decreased, and their numbers
        </Text>
      </Box>
      <Button component={Link} variant="default" to={isAuthenticated ? '/manage' : '/sign-up'}>Get started</Button>
    </Group>
  );
}
