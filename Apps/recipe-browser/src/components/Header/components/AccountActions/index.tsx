import { Link } from 'react-router-dom';
import { ActionIcon, Button, Group } from '@mantine/core';
import { IconChefHat, IconNotebook, IconSettings, IconUser } from '@tabler/icons-react';
import { useLogout } from '../../../../hooks';
import { useSession } from '../../../../providers';

export function AccountActions() {
  const { isAuthenticated } = useSession();

  const { logout } = useLogout();

  return (
    <Group gap={8}>
      {
        isAuthenticated
          ? (
            <>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/plans">
                <IconNotebook/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/recipes">
                <IconChefHat/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/profile">
                <IconUser/>
              </ActionIcon>
              <ActionIcon variant="default" size="lg" component={Link} to="/manage/settings">
                <IconSettings/>
              </ActionIcon>
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
  );
}