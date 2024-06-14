import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AuthProvider} from './components/AuthProvider';
import Layout from './components/Layout';
import Login  from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './pages/Signup';
import Axios from "axios";
import Home from './pages/Home'; 
import AccountPage from './pages/AccountPage';
import EmailVerification from './pages/EmailVerification';
import AvisoEmail from './pages/AvisoEmail';
import Noticias from './pages/Noticias';
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import AvisoRecovery from "./pages/AvisoRecovery";
import PasswordResetPage from "./pages/PasswordResetPage";
import GamePage from './pages/GamePage';
import UserGames from './pages/UserGames';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ConfirmPurchase from './pages/ConfirmPurchase';
import ComprobanteCompra from './pages/comprobanteCompra';



/////////////////TOKEN/////////////////////////////////
Axios.defaults.baseURL = 'http://localhost:8080/api/v1/'
Axios.defaults.headers.post['Accept'] = 'application/json'
Axios.defaults.headers.post['Content-Type'] = 'application/json'

Axios.interceptors.request.use((config) => { // Funcion que se encarga de anteponer una cabecera de seguridad al querer realizar funciones de usuario logueado
  const token = localStorage.getItem('local-token') // Siempre y cuando su token no este expirado 
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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/recovery" element={<PasswordRecoveryPage />} />
            <Route path="/reset-password" element={<PasswordResetPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/account-details" element={<AccountPage />} />
            <Route path="/confirm-email" element={<EmailVerification/>} />
            <Route path="/verificar-email" element={<AvisoEmail/>} />
            <Route path="/verificar-recovery" element={<AvisoRecovery/>} />
            <Route path="/noticias" element={<Noticias/>} />
            <Route path="/games/:name" element={<GamePage />} />
            <Route path="/user-games" element={<UserGames />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/confirm" element={<ConfirmPurchase />} />
            <Route path="/comprobante" element={<ComprobanteCompra />} />

          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;