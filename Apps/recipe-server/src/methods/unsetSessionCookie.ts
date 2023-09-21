import { Request, Response } from 'express';
import { SESSION_COOKIE_NAME } from '../constants';
import { Config } from '../types';

export async function unsetSessionCookie(req: Request, res: Response): Promise<void> {
  const config: Config = Config.instance;

  res.cookie(SESSION_COOKIE_NAME, '', {
    domain: config.session.domain,
    path: '/',
    httpOnly: true,
    secure: true,
    maxAge: -1
  });

  res.end();
}
