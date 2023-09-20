import { Request, Response } from 'express';
import { SESSION_COOKIE_NAME } from '../constants';

export async function unsetSessionCookie(req: Request, res: Response): Promise<void> {
  res.cookie(SESSION_COOKIE_NAME, '', {
    path: '/',
    httpOnly: true,
    secure: false,
    maxAge: -1
  });

  res.end();
}
