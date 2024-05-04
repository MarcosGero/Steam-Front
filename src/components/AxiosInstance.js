import axios from 'axios';

// Configuración de las credenciales de autenticación básica
const username = 'tuUsuario';  // Reemplaza con tu usuario
const password = 'tuContraseña';  // Reemplaza con tu contraseña
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',  // Reemplaza con la URL base de tu API
    headers: {
        'Authorization': `Basic ${token}`
    }
});

export default axiosInstance;
