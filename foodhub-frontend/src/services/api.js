import axios from 'axios';

// Connects directly to your Spring Boot port 8081
const API = axios.create({
    baseURL: 'http://localhost:8081/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

// Authentication APIs
export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const registerUser = (userData) => API.post('/auth/register', userData);

// Restaurant APIs
export const fetchRestaurants = () => API.get('/restaurants');
export const fetchRestaurantById = (id) => API.get(`/restaurants/${id}`);

// Menu APIs
export const fetchMenuByRestaurant = (restaurantID) => API.get(`/menu/restaurant/${restaurantID}`);

// Order APIs
export const placeOrder = (orderData) => API.post('/orders', orderData);
export const fetchUserOrders = (userID) => API.get(`/orders/user/${userID}`);

export default API;