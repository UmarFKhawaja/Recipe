import { Request, Response } from 'express';

export async function sendProfile(req: Request, res: Response): Promise<void> {
  res.json(req.user);
}
