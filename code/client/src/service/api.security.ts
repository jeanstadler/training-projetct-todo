const API_URL = import.meta.env.VITE_API_URL;
// console.log('API_URL:', API_URL);

export async function Register(email: string, password: string) {
  const response = await fetch(`${API_URL}/api/security/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}
