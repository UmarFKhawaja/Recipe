import { Request, Response } from 'express';

export async function checkSession(req: Request, res: Response): Promise<void> {
  if (req.user) {
    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
