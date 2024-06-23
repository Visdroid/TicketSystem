import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:5001/api', // Update with your actual backend URL
});

instance.interceptors.request.use(
  config => {
    // Attach JWT token to every request if needed
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;