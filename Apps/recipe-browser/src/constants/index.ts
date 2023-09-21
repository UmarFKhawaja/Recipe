import { CookieSetOptions } from 'universal-cookie';

export const SESSION_COOKIE_NAME: string = 'session';

export const SESSION_HEADER_NAME: string = 'X-Session';

export const COOKIES_PROVIDER_DEFAULT_SET_OPTIONS: CookieSetOptions = {
  secure: true,
  sameSite: 'lax',
  path: '/'
};
