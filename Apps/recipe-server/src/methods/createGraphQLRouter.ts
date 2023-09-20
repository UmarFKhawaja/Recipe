import { Server as HttpServer } from 'http';
import { Router } from 'express';
import { createGraphQLRequestHandler } from './createGraphQLRequestHandler';

export async function createGraphQLRouter(httpServer: HttpServer): Promise<Router> {
  const router: Router = Router();

  router.use(await createGraphQLRequestHandler(httpServer));

  return router;
}
