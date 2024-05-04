import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',  // Reemplaza con la URL base de tu API
});

export default axiosInstance;
