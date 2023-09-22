import { CookieSetOptions } from 'universal-cookie';

export const MARKER_COOKIE_NAME: string = 'marker';

export const MARKER_HEADER_NAME: string = 'X-Marker';

export const COOKIES_PROVIDER_DEFAULT_SET_OPTIONS: CookieSetOptions = {
  secure: true,
  sameSite: 'lax',
  path: '/'
};
