import { CookieSetOptions } from 'universal-cookie';

export const SESSION_MARKER_COOKIE_NAME: string = 'session-marker';

export const SESSION_MARKER_HEADER_NAME: string = 'X-Session-Marker';

export const COOKIES_PROVIDER_DEFAULT_SET_OPTIONS: CookieSetOptions = {
  secure: true,
  sameSite: 'lax',
  path: '/'
};
