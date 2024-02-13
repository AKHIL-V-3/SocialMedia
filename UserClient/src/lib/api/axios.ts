import axios from 'axios'


// Create a new Axios instance with a custom configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/auth', // Your base URL here
  headers: {
    'Content-Type': 'application/json', // Example of setting default headers
  },
});

export default api;