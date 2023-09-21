import { Request, Response } from 'express';

export async function refreshSession(req: Request, res: Response): Promise<void> {
  res.end();
}
