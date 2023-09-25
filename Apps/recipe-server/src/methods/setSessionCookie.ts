import dayjs from 'dayjs';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { Config, User } from 'recipe-data';
import { SESSION_COOKIE_NAME } from '../constants';

export async function setSessionCookie(req: Request, res: Response): Promise<void> {
  const config: Config = Config.instance;

  const {
    id,
    displayName,
    userName,
    emailAddress
  } = req.user as unknown as User;

  const token = sign({
    id,
    displayName,
    userName,
    emailAddress
  }, config.session.secret, {
    expiresIn: '1d'
  });

  const expireDate = dayjs().add(1, 'day').toDate();

  res.cookie(SESSION_COOKIE_NAME, {
    token
  }, {
    domain: config.session.domain,
    path: '/',
    httpOnly: true,
    secure: true,
    expires: expireDate
  });

  res.end();
}
