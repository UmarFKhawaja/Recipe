import dayjs from 'dayjs';
import * as jose from 'jose';

export function isValidSession(token: string): boolean {
  if (!token) {
    return false;
  }

  const { iat, exp } = jose.decodeJwt(token);

  const issueTimestamp = dayjs(iat);
  const expireTimestamp = dayjs(exp);

  const isValidSession: boolean = issueTimestamp.isBefore(expireTimestamp) && dayjs().isAfter(expireTimestamp);

  return isValidSession;
}
