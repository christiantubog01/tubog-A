interface LoginCredentials {
  username: string;
  password: string;
}

interface User {
  username: string;
  email: string;
  roles: string[];
  verified: boolean;
}

export interface LoginResponse {
  token: string;
  user: User;
  error?: string;
}

const BASE_URL =
  'https://anita-fresh-delights-web-dev-1-production.up.railway.app/api';

export async function loginApi({
  username,
  password,
}: LoginCredentials): Promise<LoginResponse> {
  console.log('API called with:', username);

  const response = await fetch(BASE_URL + '/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data: LoginResponse = await response.json();

  console.log('API RESPONSE:', data);

  if (!response.ok) {
    throw new Error(data.error || 'Login failed');
  }

  return data;
}