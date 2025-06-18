import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_KEY,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const BASE_URL = import.meta.env.VITE_API_KEY.replace('/api/v1', '');
export default instance;
