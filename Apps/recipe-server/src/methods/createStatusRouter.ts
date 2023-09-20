import { Request, Response, Router } from 'express';
import { EMPTY_SERVICE_STATUS_FUNCTION } from '../constants';
import { ServiceStatus, ServiceStatusFunction } from '../types';

export async function createStatusRouter(getServiceStatus: ServiceStatusFunction = EMPTY_SERVICE_STATUS_FUNCTION): Promise<Router> {
  const router: Router = Router();

  router.get('/', async (req: Request, res: Response): Promise<void> => {
    const services: ServiceStatus[] = await getServiceStatus();

    res.json({
      status: 'ALIVE',
      timestamp: new Date().valueOf(),
      uptime: process.uptime(),
      services
    });
  });

  return router;
}
