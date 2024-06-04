import {useLocation} from 'react-router-dom'
import Navbar from "./NavigationBar"
import Footer from './Footer'


 const Layout =({children})=>{ // Aqui es donde se arma toda la logica para que toda pagina dentro de Steam tenga un encabezado y un pie de pagina

   const location = useLocation();

   // Condiciona si la ruta actual es '/noticias'
   const showFooter = location.pathname != '/noticias';

   return(
    <>
      <Navbar />
         {children}
         {showFooter && <Footer/>}
    </>
    )
 }
 
 export default Layout