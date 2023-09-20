import { Request, Response, Router } from 'express';

export async function createHealthRouter(): Promise<Router> {
  const router: Router = Router();

  router.get('/', async (req: Request, res: Response): Promise<void> => {
    res.end();
  });

  return router;
}
