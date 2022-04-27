import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.BACKEND_ADDRESS,
  withCredentials: true,
});

export default apiClient;
