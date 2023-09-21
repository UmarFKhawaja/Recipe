import dayjs from 'dayjs';
import Cookies from 'universal-cookie';
import { config } from '../../../config';
import { COOKIES_PROVIDER_DEFAULT_SET_OPTIONS, SESSION_MARKER_COOKIE_NAME } from '../../../constants';

export async function isValidSession(token: { iat?: number, exp?: number }): Promise<boolean> {
  const { iat, exp } = token;

  if (!exp) {
    return false;
  }

  const issueTimestamp = dayjs(iat);
  const expireTimestamp = dayjs(exp);

  const isValidSession: boolean = issueTimestamp.isBefore(expireTimestamp) && dayjs().isBefore(expireTimestamp);

  if (!isValidSession) {
    const response = await fetch(`${config.server.url}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    });

    if (response.ok) {
      const cookies: Cookies = new Cookies(null, COOKIES_PROVIDER_DEFAULT_SET_OPTIONS);

      cookies.set(SESSION_MARKER_COOKIE_NAME, {
        iat: dayjs().toDate().valueOf(),
        exp: dayjs().add(1, 'hour').toDate().valueOf()
      });
    }
  }

  return isValidSession;
}
