import { Session } from '../store/types';

export const updateSession = (session: Session): Promise<Session> => {
  return fetch(`http://localhost:8080/session/${session.id}`, {
    method: 'PUT',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(session),
  })
  .then((response) => response.json());
}

export const createSession = (): Promise<Session> => {
  return fetch('http://localhost:8080/session', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json());
}