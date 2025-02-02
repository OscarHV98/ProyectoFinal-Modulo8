import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia según sea necesario
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
