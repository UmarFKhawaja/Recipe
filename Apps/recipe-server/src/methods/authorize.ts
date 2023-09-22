import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { SESSION_COOKIE_NAME } from '../constants';

export async function authorize(req: Request, res: Response, next: NextFunction): Promise<void> {
  if (req.cookies[SESSION_COOKIE_NAME]) {
    if (!req.isAuthenticated()) {
      res.status(401);
      res.end();
    } else {
      next();
    }
  } else if (req.headers.authorization) {
    passport.authenticate('bearer')(req, res, next);
  } else {
    res.status(401);
    res.end();
  }
}
