
const API_URL = import.meta.env.VITE_API_URL
// console.log('API_URL:', API_URL);
// tester si on récupère bien l'URL de l'API "http://localhost:3000"
export async function getTodos() {
  const response = await fetch(`${API_URL}/api/todo/all`);
  // console.log(`${API_URL}/api/todo/all`);
  if (!response.ok) {
    throw new Error('Failed to fetch todos');
  }
  // console.log(response.json());
  return response.json();
}