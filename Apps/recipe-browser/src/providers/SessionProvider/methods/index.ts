import { config } from '../../../config';

export async function isValidSession(): Promise<boolean> {
  try {
    const response = await fetch(`${config.server.url}/auth/check`, {
      method: 'GET',
      credentials: 'include'
    });

    return response.ok;
  } catch (error: unknown) {
    return false;
  }
}
