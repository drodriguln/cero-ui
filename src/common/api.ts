import { ApiSession } from '../store/types';

export const createSession = (): Promise<ApiSession> => {
  return fetch('http://localhost:8080/session', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json());
}