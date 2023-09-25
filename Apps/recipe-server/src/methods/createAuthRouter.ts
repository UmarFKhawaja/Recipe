import { Request, Response, Router } from 'express';
import passport from 'passport';
import { IVerifyOptions as IBearerVerifyOptions, Strategy as BearerStrategy } from 'passport-http-bearer';
import { IVerifyOptions as IPasswordVerifyOptions, Strategy as PasswordStrategy } from 'passport-local';
import { User, UserService } from 'recipe-data';
import { authorize } from './authorize';
import { checkSession } from './checkSession';
import { sendProfile } from './sendProfile';
import { setSessionCookie } from './setSessionCookie';
import { unsetSessionCookie } from './unsetSessionCookie';

export async function createAuthRouter(): Promise<Router> {
  const router: Router = Router();

  passport.use('bearer', new BearerStrategy({
    passReqToCallback: true
  }, async (req: Request, token: string, done: (error: any, user?: any, options?: IBearerVerifyOptions | string) => void) => {
    try {
      const userService: UserService = new UserService();

      const user: User = await userService.verifyUserByBearer(token);

      done(null, user);
    } catch (error: unknown) {
      done(error);
    }
  }));

  passport.use('password', new PasswordStrategy({
    session: false,
    passReqToCallback: true
  }, async (req: Request, username: string, password: string, done: (error: any, user?: Express.User | false, options?: IPasswordVerifyOptions) => void) => {
    try {
      const userService: UserService = new UserService();

      const user: User = await userService.verifyUserByPassword(username, password);

      done(null, user);
    } catch (error: unknown) {
      done(error);
    }
  }));

  passport.serializeUser(async (req: Request, user: Express.User, done: (error: any, id?: string) => void): Promise<void> => {
    const { id } = user as unknown as any;

    if (!id) {
      done(new Error('There was an error serializing the user'));
    } else {
      done(null, id);
    }
  });

  passport.deserializeUser(async (req: Request, id: string, done: (error: any, user?: Express.User | false) => any): Promise<void> => {
    const userService: UserService = new UserService();

    const user: User | null = await userService.findUserByID(id);

    if (!user) {
      done(null, {});
    } else {
      done(null, user);
    }
  });

  router.post('/register', async (req: Request, res: Response): Promise<void> => {
    const {
      displayName,
      userName,
      emailAddress,
      password
    } = req.body;

    const userService: UserService = new UserService();

    const hasSucceeded: boolean = await userService.registerUser({
      displayName,
      userName,
      emailAddress,
      password
    });

    if (hasSucceeded) {
      res.status(200);
    } else {
      res.status(400);
    }

    res.end();
  });

  router.post('/login/password', passport.authenticate('password'), setSessionCookie);

  router.post('/logout', unsetSessionCookie);

  router.get('/check', authorize, checkSession);

  router.get('/profile', authorize, sendProfile);

  return router;
}
