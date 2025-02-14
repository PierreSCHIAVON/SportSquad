import axios from 'axios';

const API_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

export const get = (url: string) => api.get(url);
export const post = (url: string, data: unknown) => api.post(url, data);
export const put = (url: string, data: unknown) => api.put(url, data);
export const del = (url: string) => api.delete(url);

export default api;