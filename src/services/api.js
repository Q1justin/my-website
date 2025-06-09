import axios from 'axios';

// Define base API URL - change this to your API endpoint
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

// Create axios instance with default config
const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor - useful for adding auth tokens
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor - useful for handling errors globally
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('token');
            // Redirect to login or handle as needed
        }
        return Promise.reject(error);
    }
);

// API methods
export const apiService = {
    // Auth methods
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    
    // User methods
    getCurrentUser: () => api.get('/user/profile'),
    updateProfile: (data) => api.put('/user/profile', data),
    
    // Example CRUD methods
    getItems: () => api.get('/items'),
    getItemById: (id) => api.get(`/items/${id}`),
    createItem: (data) => api.post('/items', data),
    updateItem: (id, data) => api.put(`/items/${id}`, data),
    deleteItem: (id) => api.delete(`/items/${id}`),
    
    // Add more API methods as needed
};

export default apiService;
