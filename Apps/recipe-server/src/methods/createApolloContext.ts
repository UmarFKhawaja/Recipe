import { Request } from 'express';
import { Context, User } from 'recipe-data';

export async function createApolloContext({ req }: { req: Request }): Promise<Context> {
  const user: User = req as unknown as User;

  if (user) {
    return {
      userID: user.id
    };
  }

  return {
    userID: ''
  };
}
