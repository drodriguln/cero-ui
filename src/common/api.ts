import { SessionStore } from '../store/types';

export const updateApiSession = (session: SessionStore) => {
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

export const setApiSession = (session: SessionStore) => {
  return fetch('http://localhost:8080/session', {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(session),
  })
    .then((response) => response.json());
}