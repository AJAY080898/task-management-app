import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'http://localhost:5000',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;
