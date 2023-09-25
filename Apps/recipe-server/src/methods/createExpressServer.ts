import { createServer as createHttpServer, Server as HttpServer } from 'http';
import { createServer as createHttpsServer } from 'https';
import { json } from 'body-parser';
import RedisStore from 'connect-redis';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express, urlencoded } from 'express';
import session from 'express-session';
import passport from 'passport';
import { CACHE, Config } from 'recipe-data';
import { createAuthRouter } from './createAuthRouter';
import { createGraphQLRouter } from './createGraphQLRouter';
import { createHealthRouter } from './createHealthRouter';
import { createStatusRouter } from './createStatusRouter';

export async function createExpressServer(config: Config): Promise<{
  app: Express;
  httpServer: HttpServer,
  options: {
    usesSSL: boolean
  }
}> {
  const usesSSL: boolean = !!config.server.https;

  const app: Express = express();
  const httpServer: HttpServer = usesSSL
    ? createHttpsServer({
      cert: config.server.https?.crt,
      key: config.server.https?.key
    }, app)
    : createHttpServer(app);

  app.use(cors({
    origin: config.cors.origin,
    credentials: true
  }));
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(cookieParser());

  app.use(session({
    store: new RedisStore({
      client: <any>CACHE
    }),
    secret: config.session.secret,
    resave: false,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use('/health', await createHealthRouter());
  app.use('/status', await createStatusRouter());
  app.use('/auth', await createAuthRouter());
  app.use('/graphql', await createGraphQLRouter(httpServer));

  return {
    app,
    httpServer,
    options: {
      usesSSL
    }
  };
}
