import { Link } from 'react-router-dom';
import { Anchor, Image } from '@mantine/core';
import logo from './assets/logo.png';

export function LogoImage() {
  return (
    <Anchor component={Link} to="/">
      <Image src={logo} alt="Logo" width={30} height={30}/>
    </Anchor>
  );
}
