import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './components/AuthProvider';
import Layout from './components/Layout';
import Login  from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import Axios from "axios";
import Home from './pages/Home'; // Asegúrate de tener este componente

/////////////////TOKEN/////////////////////////////////
Axios.defaults.baseURL = 'http://localhost:8080/api/v1/'
Axios.defaults.headers.post['Accept'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('local-token')
  if(token){
    config.headers.Authorization = token ? `Bearer ${token}` : ''
  }
  return config
})
///////////////////////////////////////////////////////


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;