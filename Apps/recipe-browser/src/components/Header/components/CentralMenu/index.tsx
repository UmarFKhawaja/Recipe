import { Anchor } from '@mantine/core';
import { Link } from 'react-router-dom';
import { DrawerLinks, HoverCardLinks } from './components';
import { CentralMenuProps } from './props';
import classes from './styles';

export function CentralMenu({ variant, links }: CentralMenuProps) {
  return (
    <>
      <Anchor component={Link} className={classes.link} to="/browse/recipes">
        Recipes
      </Anchor>
      {
        variant === 'hover-card' && <HoverCardLinks links={links}/>
      }
      {
        variant === 'drawer' && <DrawerLinks links={links}/>
      }
      <Anchor component={Link} className={classes.link} to="/browse/tutorials">
        Tutorials
      </Anchor>
      <Anchor component={Link} className={classes.link} to="/browse/techniques">
        Techniques
      </Anchor>
    </>
  );
}
