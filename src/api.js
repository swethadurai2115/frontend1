import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Point this to your Node.js backend URL
});

export default api;
